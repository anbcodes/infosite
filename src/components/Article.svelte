<script lang="ts">
import { thoughts } from "../routes/thoughts/thoughts";


	export let id: string = "-1";
    let date: string = thoughts.find(v => v.id === id).date;
    let title: string = thoughts.find(v => v.id === id).title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="header-c">{title}</div>
<div class="text-stone-500 pb-2">{date}</div>

<slot></slot>

<p><a href="/thoughts" class="darklink">View more of my thoughts</a></p>

<p class="mt-5">Comments</p>
<p>
	There are currently no comments. If you have a response or thought about this post (or about
	another comment), email it to me <a href="mailto:me@anb.codes">me@anb.codes</a> and I will consider
	adding it as a comment.
</p>

<p class="pt-5 text-gray-400" xmlns:cc="http://creativecommons.org/ns#">
	<a class="darklink-nopad" rel="cc:attributionURL" href="https://anb.codes/thoughts/0">This work</a
	>
	by
	<a
		class="darklink-nopad"
		rel="cc:attributionURL dct:creator"
		property="cc:attributionName"
		href="https://anb.codes">anbcodes</a
	>
	is licensed under
	<a
		class="darklink-nopad"
		href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
		target="_blank"
		rel="license noopener noreferrer"
		style="display:inline-flex;"
		>CC BY 4.0<img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
			alt="cc by"
		/><img
			style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
			src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
			alt="cc by"
		/></a
	>
</p>
