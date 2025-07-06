<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	let { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3">
	<h2>Przyklady</h2>
	<SfmCodeArea program_link={'/sfm/simple_program.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.ore_smelting.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.bees.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.sifting.sfm'} />
	<SfmCodeArea program_link={'/sfm/mob_farm_guru.sfm'} />
	<SfmCodeArea program_link={'/sfm/bees.sfm'} />
	<SfmCodeArea program_link={'/sfm/pb_genes.sfm'} />
</ResponsiveContainer>
