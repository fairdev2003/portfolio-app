<script>
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import SectorButton from './(components)/SectorButton.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3">
	<h2>Sekcja blogowa</h2>
	<a href="/blog/sfm">SFM</a>
	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}
			>{data.navigation?.left?.value}</SectorButton
		>
		<SectorButton right href={data.navigation?.right?.href}
			>{data.navigation?.right?.value}</SectorButton
		>
	</div>
</ResponsiveContainer>
