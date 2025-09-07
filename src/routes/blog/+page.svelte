<script>
	import { goto } from '$app/navigation';
	import Box from '../../components/Box.svelte';
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import SectorButton from './(components)/SectorButton.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<h2>Sekcja blogowa</h2>
	
	<!-- move this to component -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->
	<div on:click={() => {goto("/blog/sfm")}} class="flex gap-5 gap-5 rounded-xl bg-[#131333] hover:bg-[#131333]/50 cursor-pointer p-5">
		<div class="size-20 col-span-2 flex justify-center items-center">
			<!-- svelte-ignore a11y_missing_attribute -->
			<img src="/src/assets/sfm.png" class="" />
		</div>
		<div class="col-span-8">
			<h3>
				SFM
			</h3>
			<p class="">
				Super Factory Manager to nowoczesny mod logistyczny do Minecrafta...
			</p>
		</div>
	</div>
	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}
			>{data.navigation?.left?.value}</SectorButton
		>
		<SectorButton right href={data.navigation?.right?.href}
			>{data.navigation?.right?.value}</SectorButton
		>
	</div>
</ResponsiveContainer>
