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
			codeLink: 'https://github.com/anbcodes/infosite/'
		},
		{
			name: 'LED Light Strip Controller',
			link: null,
			moreInfo: 'led-light-strips',
			description: 'My code to control my led light strips with my Arduino',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/led-lights'
		},
		{
			name: 'Air1 to Youtube Music',
			link: null,
			moreInfo: 'air1-to-yt',
			description:
				'This tool watches for the songs that air1 has played and creates a youtube music playlist with them',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/air1-to-ytmusic'
		},
		{
			name: '3 Hour platformer',
			link: 'https://3hr-platformer.anb.codes',
			moreInfo: '3hr-platformer',
			description: 'My brother challenged me to write a game in three hours',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/3hr-platformer'
		},
		{
			name: 'How The Market Works ad hider',
			link:
				'https://chrome.google.com/webstore/detail/htmw-ad-hider/boefgankmlgmcmebohglelhngipmmckm',
			moreInfo: 'htmw-ad-hider',
			description:
				'HTMW had a lot of ads and my ad blocker was not really working so I made my own extension',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/htmw-ad-remover'
		},
		{
			name: 'A Stopwatch',
			link: null,
			moreInfo: 'htmw-ad-hider',
			description: 'A Stopwatch which I made',
			year: '2020',
			codeLink: 'https://github.com/anbcodes/timer'
		},
		{
			name: 'Slide Advancer',
			link: 'https://slide-advancer.anb.codes',
			moreInfo: 'slide-advancer',
			description:
				'Slide Advancer is an app that allows you to advance slides (Lines of text) on a computer using your phone',
			year: '2021',
			codeLink: null
		},
		{
			name: 'Some Cybersecuity Scripts',
			link: null,
			moreInfo: 'cyberscripts',
			description: 'Some scripts which I have used for capture the flag challenges',
			year: '2021',
			codeLink: 'https://github.com/anbcodes/cyberscripts'
		},
		{
			name: 'Advent of Code 2020',
			link: 'https://adventofcode.com/2020',
			moreInfo: 'advent-of-code-2020',
			description: 'My solutions to the Advent of Code 2020',
			year: '2020',
			codeLink: 'https://github.com/anbcodes/advent2020'
		},
		{
			name: 'Google Docs ANI Chart Analyzer 2.0',
			link: 'https://ani.anb.codes',
			moreInfo: 'ani',
			description:
				'This tool takes a sorted ANI chart and reorders the items in it (So you can look at it in order)',
			year: '2020',
			codeLink: 'https://github.com/anbcodes/ani-chart-analyzer-2.0'
		},
		{
			name: 'School Planner',
			link: 'https://school-planner.anb.codes',
			moreInfo: 'school-planner',
			description: 'This is a tool I made for planning out my weekly schedule for my school work',
			year: '2019',
			codeLink: 'https://github.com/anbcodes/School_Planner/'
		},
		{
			name: 'Advent of Code 2019',
			link: 'https://adventofcode.com/2019',
			moreInfo: 'advent-of-code-2019',
			description: 'My solutions to the Advent of Code 2019',
			year: '2019',
			codeLink: 'https://github.com/anbcodes/AdventOfCode2019'
		},
		{
			name: 'Naughty or Nice List',
			link: 'https://naughty-or-nice.anb.codes',
			moreInfo: 'naughty-or-nice',
			description:
				'The app was a joke I made one christma, but I used it as an experiment for encrypting user data',
			year: '2019'
		},
		{
			name: 'Lesson Planner',
			link: 'https://lesson-planner.anb.codes',
			moreInfo: 'lesson-planner',
			description:
				'This tool is pretty much a copy of the School Planner but for teachers (For my homeschool group)',
			year: '2019',
			codeLink: 'https://github.com/anbcodes/Lesson_Planner'
		},
		{
			name: 'Multiplication tables',
			link: 'https://multiplication-tables.anb.codes',
			moreInfo: 'multiplication-tables',
			description: 'A game where you can review mulitplication facts',
			year: '2019'
		},
		{
			name: 'Latin Vocabulary Review',
			link: 'https://latin-review.anb.codes',
			moreInfo: 'latin-review',
			description:
				'A game that asks what latin you want to review then creates random questions with multiple choice answers',
			year: '2019'
		},
		{
			name: 'Latin Charts',
			link: 'https://latin-charts.anb.codes',
			moreInfo: 'latin-charts',
			description: 'A app where you fill in the other side of a chart with latin or english words',
			year: '2019'
		},
		{
			name: 'Latin Board',
			link: 'https://latin-board.anb.codes',
			moreInfo: 'latin-board',
			codeLink: 'https://github.com/anbcodes/LatinBoard',
			description:
				'Latin Board generates a 6x6 grid of latin vocabulary which you can use to review vocabulary',
			year: '2019'
		},
		{
			name: 'Simple Online Store',
			link: 'https://simple-online-store.anb.codes',
			moreInfo: 'simple-online-store',
			codeLink: 'https://github.com/anbcodes/simpleonlinestore',
			description:
				'Simple online store is a app that I made for my younger bother so that he could set up a store in his room that had barcodes',
			year: '2019'
		},
		{
			name: 'My First Website',
			link: 'https://first_site.anb.codes',
			moreInfo: 'first-website',
			description: 'My first website I ever made (It looks pretty bad)',
			year: '2017',
			codeLink: 'https://github.com/anbcodes/oldwebsite'
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
			<div class="text-sm text-right text-warmGray-400 w-full">{project.year}</div>
		</div>
		<!-- </a> -->
	{/each}
</div>
