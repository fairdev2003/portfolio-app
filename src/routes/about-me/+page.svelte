<script lang="ts">
	import TechnologyStack from './sectors/TechnologyStack.svelte';
	import Education from './sectors/Education.svelte';
	import JobExperience from './sectors/JobExperience.svelte';
	import FileDownload from './sectors/FileDownload.svelte';
	import Intrudaction from './sectors/Intrudaction.svelte';
	import Hardware from './sectors/Hardware.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ContentsTable from '../../components/typography/ContentsTable.svelte';
	import Projects from './sectors/Projects.svelte';
</script>

<div class="flex flex-col lg:col-span-2">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'O MNIE', route: '/about-me' }
		]}
	/>
	<Intrudaction />
	<TechnologyStack />
	<Projects blockPagesNavigation />
	<Education />
	<JobExperience />
	<Hardware />
	<FileDownload />
</div>

<svelte:head>
	<title>Projekty</title>
	<meta name="description" content="Moje projekty." />
</svelte:head>
