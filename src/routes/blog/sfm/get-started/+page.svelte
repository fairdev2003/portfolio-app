<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3">
	<h2>Zaczynamy</h2>

	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}
			>{data.navigation?.left?.value}</SectorButton
		>
		<SectorButton right href={data.navigation?.right?.href}
			>{data.navigation?.right?.value}</SectorButton
		>
	</div>
</ResponsiveContainer>
