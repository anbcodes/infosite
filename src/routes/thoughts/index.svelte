<script lang="ts">
	import { thoughts } from './thoughts';
</script>

<svelte:head>
	<title>Thoughts</title>
</svelte:head>

<div class="header-c">Thoughts</div>

<p>
	This is basically my blog. I write about random things that interest me, thoughts that I have, or
	experiences that I want to share.
</p>

<div>
	{#each thoughts as thought}
		<div class="flex">
			<div class="mr-4 text-stone-500">{thought.id}.</div>
			<a class="darklink" href="/thoughts/{thought.id}">{thought.title}</a>
		</div>
		<div class="ml-8 mb-2 text-stone-500 text-sm">{thought.date}</div>
	{/each}
</div>
