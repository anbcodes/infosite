<script>
	import '../app.css';
	import '../app.postcss';
</script>

<main class="w-full p-5 sm:p-10 h-full">
	<div class="flex justify-center w-full h-full">
		<div class="w-full md:w-2/3 lg:w-1/2 h-full flex flex-col">
			<div>
				<slot />
			</div>
			<div class="flex-grow"></div>
			<div>
				<div class="flex flex-wrap py-5">
					<a href="/" class="darklink">Home</a>
					<a href="https://github.com/anbcodes" class="darklink">Github</a>
					<a href="https://www.linkedin.com/in/andrew-baumes-36242a216/" class="darklink"
						>LinkedIn</a
					>
					<a href="mailto:anbcodes@protonmail.com" class="darklink">anbcodes@protonmail.com</a>
					<a href="/privacy" class="darklink">Privacy Policy</a>
					<a href="/tos" class="darklink">Terms of Service</a>
					<a href="/disclaimer" class="darklink">Disclaimer</a>
				</div>
			</div>
		</div>
	</div>
</main>
