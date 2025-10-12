<script lang="ts">
	import Heading from '../../../components/typography/Heading.svelte';
	import PagesNavigation from '../../../components/typography/PagesNavigation.svelte';
	import SFMCodeArea from '../../blog/sfm/(components)/SFMCodeArea.svelte';
</script>

<div class="flex flex-col gap-3">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'MINECRAFT', route: '/minecraft' },
			{ name: 'FTB SKIES EXPERT', route: '/minecraft/ftb-skies-expert' }
		]}
	/>
	<div class="mb-5 flex flex-col gap-3">
		<Heading>FTB Skies Expert.</Heading>
	</div>

	<SFMCodeArea program_link="/sfm/ftb-skies-expert/create-pressing.sfm" />
	<SFMCodeArea program_link="/sfm/ftb-skies-expert/sieving-guru.sfm" />
</div>
