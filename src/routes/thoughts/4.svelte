<script lang="ts">
	import Article from '../../components/Article.svelte';
</script>

<Article id="4">
	<p>I got a Raspberry Pi 4 for Christmas and I decided to setup a home server on it.</p>
	<p>Contents</p>

	<ul>
		<li><a href="#setup">Setup</a></li>
		<li><a href="#reverse_proxy">Reverse Proxy</a></li>
		<li><a href="#gitea">Gitea</a></li>
		<li><a href="#nextcloud">Nextcloud</a></li>
		<li><a href="#static_hosting">Static hosting</a></li>
		<li><a href="#matrix">Matrix</a></li>
		<li><a href="#wrapping_up">Wrapping up</a></li>
	</ul>
	<h2 id="setup">Setup</h2>
	<p>
		First I had to get everything setup. I started by installing Ubuntu 21.10 server on the pi. It
		took a little bit to get working, mainly because I was attempting to ssh into the wrong computer
		(not the pi). Next I got docker installed, it might have already been installed, but I ended up
		installing it with <code>snap</code> which also installs <code>docker-compose</code>
	</p>
	<h2 id="reverse_proxy">Reverse Proxy</h2>
	<p>
		Because I was gonna be serving multiple sites from the pi, I needed to use a reverse proxy to
		forward http requests based on the domain. I also wanted it to handle https so that each app
		would not need to.
	</p>
	<p>
		I decided to use <code>
			<a href="https://github.com/nginx-proxy/nginx-proxy">nginxproxy/nginx-proxy</a>
		</code>. It was pretty easy to setup. It basiclly allows you to add a environment variable to
		other containers called <code>VIRTUAL_HOST</code> with the domain name and it handles all the nginx
		configuration. Below is my docker compose service for the reverse proxy.
	</p>
	<pre>
services:
    nginx-proxy:
    image: nginxproxy/nginx-proxy
    labels:
        - com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy
    volumes:
        - html:/usr/share/nginx/html
        - certs:/etc/nginx/certs
        - ./nginx/vhost:/etc/nginx/vhost.d
        - /var/run/docker.sock:/tmp/docker.sock:ro
    networks:
        - proxy
    ports:
        - "80:80"
        - "443:443"
    </pre>
	<p>
		I also created a network called <code>proxy</code> and two volumes called <code>html</code> and
		<code>certs</code>. I didn't use a volume to mount the <code>vhost</code> because I needed to modify
		some configuration for Nextcloud.
	</p>

	<p>
		That handles the reverse proxy part, but I also wanted it to handle https. Thankfully, they also
		created a companion container that allows you to specify <code>LETSENCRYPT_HOST</code> on any
		container and obtains a let's encrypt certificate. Specificly I used their container
		<code>
			<a href="https://github.com/nginx-proxy/acme-companion">nginxproxy/acme-companion</a>
		</code>
		with the following configuration.
	</p>

	<pre>
services:
    ...
    acme_companion:
        image: nginxproxy/acme-companion
        volumes:
            - html:/usr/share/nginx/html
            - certs:/etc/nginx/certs
            - ./nginx/vhost:/etc/nginx/vhost.d
            - /var/run/docker.sock:/var/run/docker.sock:ro
            - ./nginx/acme.sh:/etc/acme.sh
        depends_on:
            - nginx-proxy
        environment:
            - DEFAULT_EMAIL=[YOUR_EMAIL]
    </pre>
	<p>
		With that I can specify <code>VIRTUAL_HOST</code> and <code>LETSENCRYPT_HOST</code> and have everything
		just work!
	</p>
	<h2 id="gitea">Gitea</h2>
	<p>
		Next I wanted to set up <a href="https://gitea.com/">Gitea</a>, an alternative to Github. This
		was very simple as they have a docker image that I used. Gitea also requires a database so I
		also used a Postgres database docker image with it. Lastly, because Gitea and the database
		should be on the same network but the database doesn't need to be on the proxy network I created
		another network called <code>gitea</code>. The other slightly complex thing, which I will not
		cover here as there is already documented
		<a href="https://docs.gitea.io/en-us/install-with-docker/#ssh-container-passthrough">here</a>,
		is forwarding the ssh into the docker container.
	</p>
	<p>The configuration</p>
	<pre>
networks:
    ...
    gitea:
...
services:
    ...
    gitea:
        image: gitea/gitea:1.15.8
        environment:
            - VIRTUAL_HOST=[YOUR_DOMAIN]
            - LETSENCRYPT_HOST=[YOUR_DOMAIN]
            - USER_UID=1001
            - USER_GID=1001
            - GITEA__database__DB_TYPE=postgres
            - GITEA__database__HOST=gitea_db:5432
            - GITEA__database__NAME=gitea
            - GITEA__database__USER=gitea
            - GITEA__database__PASSWD=[DB_PASSWORD]
            - GITEA__server__DOMAIN=[YOUR_DOMAIN]
            - GITEA__server__SSH_DOMAIN=[YOUR_DOMAIN]
            - GITEA__server__HTTP_PORT=80
            - GITEA__server__ROOT_URL=https://[YOUR_DOMAIN]
        restart: always
        networks:
            - proxy
            - gitea
        volumes:
            - ./gitea/data:/data
            - /home/git/.ssh/:/data/git/.ssh
            - /etc/timezone:/etc/timezone:ro
            - /etc/localtime:/etc/localtime:ro
        ports:
            - "127.0.0.1:2222:22"
        expose:
            - "80"
        depends_on:
            - gitea_db
    </pre>
	<h2 id="nextcloud">Nextcloud</h2>
</Article>
