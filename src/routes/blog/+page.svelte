<script>
	import { goto } from '$app/navigation';
	import Box from '../../components/Paper.svelte';
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import SectorButton from './(components)/SectorButton.svelte';
	import SFM from '../../assets/sfm.png';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2 ">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'BLOG', route: '/about-me' }
		]}
	/>
	<h2>Sekcja blogowa</h2>

	<!-- move this to component -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->
	<div
		on:click={() => {
			goto('/blog/sfm');
		}}
		class="box flex cursor-pointer gap-5 rounded-xl p-5 hover:bg-[#131333]/50"
	>
		<div class="col-span-2 flex size-20 items-center justify-center">
			<!-- svelte-ignore a11y_missing_attribute -->
			<img src={SFM} class="" />
		</div>
		<div class="col-span-8">
			<h3>SFM</h3>
			<p class="">Super Factory Manager to nowoczesny mod logistyczny do Minecrafta...</p>
		</div>
	</div>
	<div class="mt-2 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}
			>{data.navigation?.left?.value}</SectorButton
		>
		<SectorButton right href={data.navigation?.right?.href}
			>{data.navigation?.right?.value}</SectorButton
		>
	</div>
</ResponsiveContainer>
