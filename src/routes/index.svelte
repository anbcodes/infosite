<script>
	import ProjectList from '../components/ProjectList.svelte';
	const projects = [
        {
            name: 'Time',
            link: 'https://time.anb.codes',
            description: 'A online stopwatch. (Cloud Stopwatch v2)',
            year: '2022',
            codeLink: 'https://github.com/anbcodes/online-stopwatch',
		{
			name: 'Cloud Stopwatch',
			link: 'https://cloud-watch.anb.codes',
			description:
				'This is a cloud stopwatch for keeping track of multiple stopwatches across devices.',
			year: '2022',
			codeLink: 'https://github.com/anbcodes/cloud-watch'
		},
		{
			name: 'Timeline',
			description: 'This is a project allows you to interactivly work on a timeline.',
			year: '2022',
			codeLink: 'https://github.com/anbcodes/timeline'
		},
		{
			name: 'Gem',
			link: 'https://deno.land/x/gem',
			description: 'A gemini server similar to oak or koa, written in deno.',
			year: '2022',
			codeLink: 'https://github.com/anbcodes/gem'
		},
		{
			name: 'Yoda Sightings',
			link: 'https://yoda.anb.codes',
			description:
				'My family has been hiding a lego baby yoda around the house. I post the pictures of where we find him here.',
			year: '2022',
			codeLink: 'https://github.com/anbcodes/yoda-sightings'
		},
		{
			name: 'NAND Adder',
			link: 'https://nandadder.anb.codes',
			description: 'A school project where I simulate a 8 bit adder using only NAND gates.',
			year: '2022',
			codeLink: 'https://github.com/anbcodes/nandgateslogic'
		},
		{
			name: 'anb.codes',
			link: 'https://anb.codes',
			moreInfo: 'anbcodes-site',
			description: 'anb.codes is this website which was made with Sveltekit and Tailwindcss.',
			year: '2021',
			codeLink: 'https://git.anb.codes/anbcodes/website'
		},
		{
			name: 'Thoughts',
			link: 'https://anb.codes/thoughts',
			moreInfo: 'anbcodes-site',
			description: 'Thoughts is the place where I write.',
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

<svelte:head>
	<title>Anb.codes</title>
</svelte:head>

<div class="header-c">About Me</div>

<p>
	Hello! I am a computer programmer. I know how to program in HTML, CSS, Javascript, and Typescript.
	I've used Svelte and Vuejs for creating websites (This site is made with SvelteKit). I'm not as
	good at C/C++ and Python, but I've written programs with them. I've also experimented with Java,
	Rust, and Haskell, but I would not really be able to use them to write a program.
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
<p>
	I'm also currently looking for web development contract work. I can create responsive websites,
	simple web apps, or prototypes. Contact me for more information.
</p>
<p>
	Lastly, I also write about random things <a href="/thoughts">here</a>
</p>

<p>
	<a href="https://www.linkedin.com/in/andrew-baumes-36242a216/" class="darklink">Linkedin</a>
	<a href="https://github.com/anbcodes" class="darklink">Github</a>
	<a href="mailto:me@anb.codes" class="darklink">me@anb.codes</a>
	<a href="https://jason1.page" class="darklink">My younger brother's site</a>
</p>

<div class="header-c">Personal Projects</div>
{#each [...new Set(projects.map((v) => v.year))] as year}
	<div class="text-center text-sm">{year}</div>
	<ProjectList projects={projects.filter((v) => v.year === year)} />
{/each}
