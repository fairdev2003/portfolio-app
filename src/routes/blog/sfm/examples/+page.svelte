<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import PageNavigator from '../../(components)/PageNavigator.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	let { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<h2>📝 Przykłady</h2>
	<SfmCodeArea program_link={'/sfm/simple_program.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.ore_smelting.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.bees.sfm'} />
	<SfmCodeArea program_link={'/sfm/skies.sifting.sfm'} />
	<SfmCodeArea program_link={'/sfm/mob_farm_guru.sfm'} />
	<SfmCodeArea program_link={'/sfm/bees.sfm'} />
	<SfmCodeArea program_link={'/sfm/pb_genes.sfm'} />
	<SfmCodeArea
		program_link={'https://raw.githubusercontent.com/TeamDman/SuperFactoryManager/refs/heads/1.19.2/examples/02-retention.sfm'}
	/>
	<SfmCodeArea
		program_link={'https://raw.githubusercontent.com/TeamDman/SuperFactoryManager/refs/heads/1.19.2/examples/random/patterns.sfm'}
	/>
	<SfmCodeArea
		program_link={'https://raw.githubusercontent.com/TeamDman/SuperFactoryManager/refs/heads/1.19.2/examples/random/mekanism.sfm'}
	/>
	<SfmCodeArea
		program_link={'https://raw.githubusercontent.com/TeamDman/SuperFactoryManager/refs/heads/1.19.2/examples/random/alltheores.sfm'}
	/>
	<SfmCodeArea
		program_link={'https://raw.githubusercontent.com/TeamDman/SuperFactoryManager/refs/heads/1.19.2/examples/03-conditions.sfm'}
	/>
	<PageNavigator left={data.navigation?.left} right={data.navigation?.right} />
</ResponsiveContainer>
