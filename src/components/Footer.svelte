<script>
	import { pageSections } from '$lib';
	import CodeLine from '../routes/blog/sfm/(components)/CodeLine.svelte';
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
	class="flex flex-col items-center justify-center gap-4 border-1 border-neutral-800/60 bg-neutral-900/60 py-20 pt-10"
>
	<div
		class={`box relative flex flex-col border border-neutral-700/60 bg-neutral-900/60 px-4 py-2`}
	>
		<CodeLine disabledHighlight
			><span class="text-blue-500/70">{'[klimson@klimson-arch ~]$'}</span>
			{easterEgg} <span></span></CodeLine
		>
	</div>
	<div class="flex flex-col gap-4 lg:flex-row">
		{#each pageSections as pageSection}
			<Paragraph>
				<a href={pageSection.path}>{pageSection.name}</a>
			</Paragraph>
		{/each}
	</div>
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
