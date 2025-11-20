<script>
	import Timeline from '../../../components/timeline/Timeline.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import ProjectCard from './components/ProjectCard.svelte';
	import RenovationAlert from './components/RenovationAlert.svelte';
</script>

<div class="flex flex-col gap-5">
	<Heading padding id="Doświadczenie-zawodowe">Doświadczenie zawodowe</Heading>
	<ProjectCard
		onClick={() => {}}
		logo={{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSg96PiqJPorUOvlY71C7D2HtuvxcjFsGzA&s',
			color: 'bg-neutral-400/50',
			style: 'bg-red-500'
		}}
		name="Contact Sales"
		description="Junior Sales Specialist | Marzec 2024 - Październik 2025"
	/>
	<ProjectCard
		onClick={() => {}}
		logo={{
			url: 'https://www.gowork.pl/media/cache/company_logo_profile_large_webp/uploads/company_profile_image/2/4/c/24c7fac5839f18d7df0f1c5f40493d7b.png',
			color: 'bg-neutral-400/50',
			style: 'bg-red-500'
		}}
		name="Forteam"
		description="Doradca klienta | Październik 2025 - Teraz"
	/>
</div>

{#snippet JobExperienceSnippet()}
	<div class="flex items-center gap-3">
		<img
			class="h-15 w-15"
			alt="contactsales"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSg96PiqJPorUOvlY71C7D2HtuvxcjFsGzA&s"
		/>
		<div>
			<h3>Contact Sales</h3>
			<p class="font-[500] text-gray-500">Junior Sales Specialist | Marzec 2024 - Teraz</p>
		</div>
	</div>
{/snippet}
