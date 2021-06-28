<script>
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
	import Github from 'svelte-material-icons/GithubCircle.svelte';
	export let projects = [];
</script>

<div class="my-3 border-warmGray-400 rounded border">
	{#each projects as project, i}
		<!-- <a href="/projects/{project.moreInfo}" class="hover:no-underline"> -->
		<div class="p-4 text-warmGray-300 border-t border-warmGray-400" class:border-t={i !== 0}>
			<div class="text-xl flex">
				<div>{project.name}</div>
				<div class="flex-grow" />
				{#if project.codeLink}
					<a
						class="rounded-full flex justify-center items-center text-white visited:text-gray-100"
						href={project.codeLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github size="1.5rem" />
					</a>
				{/if}
				{#if project.link}
					<a
						class="rounded-full p-2 flex justify-center items-center hover:bg-gray-900 text-white visited:text-gray-100"
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<OpenInNew />
					</a>
				{/if}
			</div>
			<div class="text-warmGray-400">
				{project.description}
			</div>
			<!-- <div class="text-sm text-right text-warmGray-400 w-full">{project.year}</div> -->
		</div>
		<!-- </a> -->
	{/each}
</div>
