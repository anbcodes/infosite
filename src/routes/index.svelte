<script>
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
	import Github from 'svelte-material-icons/GithubCircle.svelte';
	const projects = [
		{
			name: 'anb.codes',
			link: 'https://anb.codes',
			moreInfo: 'anbcodes-site',
			description: 'anb.codes is this website which was made with Sveltekit and Tailwindcss.',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/anbcodes.github.io'
		},
		{
			name: 'Google Docs ANI Chart Analyzer 2.0',
			link: 'https://ani.anb.codes',
			moreInfo: 'ani',
			description:
				'This tool takes a sorted ANI chart and reorders the items in it (So you can look at it in order)',
			year: '2020',
			codeLink: ''
		},
		{
			name: 'School Planner',
			link: 'https://school-planner.anb.codes',
			moreInfo: 'school-planner',
			description: 'This is a tool I made for planning out my weekly schedule for my school work',
			year: 'unknown'
		},
		{
			name: 'Naughty or Nice List',
			link: 'https://naughty-or-nice.anb.codes',
			moreInfo: 'naughty-or-nice',
			description:
				'The app was a joke I made for my brothers one christmas (I used it as an experiment for encrypting user data)',
			year: 'unknown'
		},
		{
			name: 'Lesson Planner',
			link: 'https://lessonplanner.anb.codes',
			moreInfo: 'lesson-planner',
			description:
				'This tool is pretty much a copy of the School Planner but for teachers (For my homeschool group)',
			year: 'unknown'
		},
		{
			name: 'Multiplication tables',
			link: 'https://multiplication-tables.anb.codes',
			moreInfo: 'multiplication-tables',
			description: 'A game where you can review mulitplication facts',
			year: 'unknown'
		},
		{
			name: 'Latin Vocabulary Review',
			link: 'https://latin-review.anb.codes',
			moreInfo: 'latin-review',
			description:
				'A game that asks what latin you want to review then creates random questions with multiple choice answers',
			year: 'unknown'
		},
		{
			name: 'Latin Charts',
			link: 'https://latin-charts.anb.codes',
			moreInfo: 'latin-charts',
			description: 'A app where you fill in the other side of a chart with latin or english words',
			year: 'unknown'
		},
		{
			name: 'Latin Board',
			link: 'https://latin-board.anb.codes',
			moreInfo: 'latin-board',
			description:
				'Latin Board generates a 6x6 grid of latin vocabulary which you can use to review vocabulary',
			year: 'unknown'
		}
	];
</script>

<div class="header">About Me</div>

<p>
	Hello! I am a 14 year old computer programmer. I know how to program in HTML, CSS, Javascript, and
	Typescript. I've used Svelte and Vuejs for creating websites (This site is made with sveltekit).
	I'm not as good at C/C++ and Python, but I've written programs with them. I've also experimented
	with Java, Rust, and Haskell, but I would not really be able to write a program with them.
</p>
<p>
	I also have some experience with cybersecuity. I've done <a
		href="https://www.cyberstartamerica.org/">Cyberstart</a
	>
	and participated in the 2021 National Cyber Scholarship Competition, in which I scored
	<a
		href="https://leaderboard.tomahawque.com/943e22be-870a-11eb-8e55-636337383761/359e5c0b1998ff3e19014cb3b9239f64/"
		>21st</a
	>.
</p>

<div class="header">Projects</div>

<div class="my-5 border-warmGray-400 rounded border">
	{#each projects as project, i}
		<a href="/projects/{project.moreInfo}" class="hover:no-underline">
			<div class="p-4 text-warmGray-300 border-t" class:border-t={i !== 0}>
				<div class="text-xl flex">
					<div>{project.name}</div>
					<div class="flex-grow" />
					<a
						class="rounded-full flex justify-center items-center text-white visited:text-gray-100"
						href={project.codeLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github size="1.5rem" />
					</a>
					<a
						class="rounded-full p-2 flex justify-center items-center hover:bg-gray-900 text-white visited:text-gray-100"
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<OpenInNew />
					</a>
				</div>
				<div class="text-warmGray-400">
					{project.description}
				</div>
			</div>
		</a>
	{/each}
</div>
