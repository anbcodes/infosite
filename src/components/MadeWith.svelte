<script>
	export let svelte = false;
	export let tailwindcss = false;
	export let typescript = false;
	export let javascript = false;
	export let vuejs = false;
	export let vuetify = false;
	export let firebase = false;
	export let postgresql = false;
	export let sveltekit = false;

	let links = {
		Svelte: 'https://svelte.dev/',
		Tailwindcss: 'https://tailwindcss.com/',
		Typescript: 'https://www.typescriptlang.org/',
		Javascript: 'https://en.wikipedia.org/wiki/JavaScript',
		VueJS: 'https://vuejs.org/',
		Vuetify: 'https://vuetifyjs.com/',
		Firebase: 'https://firebase.google.com/',
		Postgresql: 'https://www.postgresql.org/',
		SvelteKit: 'https://kit.svelte.dev/'
	};

	let items = [];
	$: {
		if (svelte) {
			items.push('Svelte');
		}
		if (tailwindcss) {
			items.push('Tailwindcss');
		}
		if (typescript) {
			items.push('Typescript');
		}
		if (javascript) {
			items.push('Javascript');
		}
		if (vuejs) {
			items.push('VueJS');
		}
		if (vuetify) {
			items.push('Vuetify');
		}
		if (firebase) {
			items.push('Firebase');
		}
		if (postgresql) {
			items.push('Postgresql');
		}
		if (sveltekit) {
			items.push('SvelteKit');
		}
		items = items;
	}
</script>

<div class="header">Made With</div>
<div class="justify-center flex items-center">
	<div class="text-center w-full md:w-2/3 lg:w-1/2">
		{#each items.slice(0, -1) as item}
			<a href={links[item]}>
				{item},
			</a>&nbsp;
		{/each}
		and

		<a href={links[items.slice(-1)[0]]}>
			{items.slice(-1)[0]}
		</a>
	</div>
</div>
