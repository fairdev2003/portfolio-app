<script>
	import TechnologyStackItem from '../../../components/TechnologyStackItem.svelte';
	import { techStackItems, websiteStack } from './stack.js';
</script>

<div class="flex flex-col gap-5 justify-center">
	<div class="flex flex-col gap-1">

		<div class="flex items-center gap-4">
			<h2>Stack technologiczny</h2>
			<div class="bg-gray-500 h-0.5 flex-1"></div>
		</div>
		<p class="text-gray-500 font-[500]">Na przestrzeni lat ten stack technologiczny cały czas się rozwijał. Moje pierwsza styczność z programowaniem miała miejsce gdy dołączyłem do projektu gry na Roblox. Nigdy nie sądziłem ze zaczne tworzyć tak prężnie strony internetowe.</p>
	</div>
	<!--Stack items-->
	<div class="flex flex-wrap lg:justify-start md:justify-start justify-center gap-3">
		{#each techStackItems as { src, stack_name, imageStyle }}
			<TechnologyStackItem {src} {stack_name} {imageStyle} />
		{/each}
	</div>
	<h3>Technologie wykorzystane do stworzenia tej strony</h3>
	<div class="flex flex-wrap gap-3">
		{#each websiteStack as { src, stack_name }}
			<TechnologyStackItem {src} {stack_name} />
		{/each}
	</div>
	<p class="font-[500]">Zobacz także <a href="/projects">Projekty</a></p>
</div>