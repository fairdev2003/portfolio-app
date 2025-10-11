<script>
	import { pageSections } from '$lib';
	import CodeLine from '../routes/blog/sfm/(components)/CodeLine.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import Paragraph from './typography/Paragraph.svelte';

	const texts = [
		'Update README.md',
		'Create data.json',
		'Update bot.py',
		'Update .env',
		'Update data.json'
	];

	const easterEgg = texts[Math.floor(Math.random() * texts.length)];
</script>

<footer
	class="flex flex-col items-center justify-center gap-4 border-1 bg-neutral-200 px-5 py-20 pt-10 text-start dark:border-neutral-800/60 dark:bg-neutral-900/60"
>
	<div
		class={`box relative flex flex-col border bg-red-500 px-4 py-2 dark:border-neutral-700/60 dark:bg-neutral-900/60`}
	>
		<CodeLine disabledHighlight
			><span class="text-blue-500/70">{'[klimson@klimson-arch ~]$'}</span>
			{easterEgg} <span></span></CodeLine
		>
	</div>

	<div>
		<div class="flex justify-start gap-3 lg:flex lg:flex-row">
			{#each pageSections as pageSection}
				<div class="col-span-1">
					<Paragraph>
						<a class="text-[15px] lg:text-[17px]" href={pageSection.path}>{pageSection.name}</a>
					</Paragraph>
				</div>
			{/each}
		</div>
	</div>
	<ThemeSwitch />
	<p class="footer-text text-white/80">@ Klimson 2025. All rights reserved.</p>
</footer>

<style>
	.footer-text {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	a {
		color: white;
	}
</style>
