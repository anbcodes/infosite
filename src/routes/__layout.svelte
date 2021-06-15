<script>
	import '../app.postcss';
</script>

<main class="w-full p-10 h-full">
	<div class="flex justify-center w-full h-full">
		<div class="w-full md:w-2/3 lg:w-1/2 h-full flex flex-col">
			<div>
				<slot />
			</div>
			<div class="flex-grow" />
			<div class="flex">
				<a href="/" class="text-warmGray-500 p-5 visited:text-gray-500">Home</a>
				<a href="https://github.com/anbcodes" class="text-warmGray-500 p-5 visited:text-gray-500"
					>Github</a
				>
			</div>
		</div>
	</div>
</main>
