<script>
	import { goto } from '$app/navigation';
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import SFM from '../../assets/sfm.png';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import ProjectCard from '../about-me/sectors/components/ProjectCard.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2 ">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'BLOG', route: '/about-me' }
		]}
	/>
	<Heading>Blog</Heading>
	<div class="h-3"></div>

	<!-- move this to component -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->

	<ProjectCard
		name="Super Factory Manager"
		description="Super Factory Manager to nowoczesny mod logistyczny do Minecrafta..."
		logo={{ url: SFM, color: 'bg-indigo-500/50' }}
		onClick={() => {
			goto('/blog/sfm');
		}}
	/>
</ResponsiveContainer>
