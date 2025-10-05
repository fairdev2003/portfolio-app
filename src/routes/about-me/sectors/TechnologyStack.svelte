<script lang="ts">
	import TechnologyStackItem from '../../../components/TechnologyStackItem.svelte';
	import { techStackItems, websiteStack } from '$lib/static.js';
	import Heading from '../../../components/typography/Heading.svelte';
	import Paragraph from '../../../components/typography/Paragraph.svelte';
	import RenovationAlert from './components/RenovationAlert.svelte';
</script>

<div class="flex flex-col justify-center gap-5">
	<div class="flex flex-col gap-1">
		<Heading padding class="mb-1" id="Stack">Stack</Heading>
		<Paragraph>
			Na przestrzeni lat ten stack technologiczny cały czas się rozwijał. Moje pierwsza styczność z
			programowaniem miała miejsce gdy dołączyłem do projektu gry na Roblox. Nigdy nie sądziłem ze
			zaczne tworzyć tak prężnie strony internetowe.
		</Paragraph>
	</div>
	<!--Stack items-->

	<RenovationAlert />
</div>

{#snippet StackSector()}
	<div class="flex flex-wrap justify-center gap-3 md:justify-start lg:justify-start">
		{#each techStackItems as { src, stack_name, imageStyle, href }}
			<TechnologyStackItem {href} {src} {stack_name} {imageStyle} />
		{/each}
	</div>
	<h3>Technologie wykorzystane do stworzenia tej strony</h3>
	<div class="flex flex-wrap gap-3">
		{#each websiteStack as { src, stack_name, href }}
			<TechnologyStackItem {href} {src} {stack_name} />
		{/each}
	</div>
	<p class="font-[500]">Zobacz także <a href="/projects">Projekty</a></p>
{/snippet}
