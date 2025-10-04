<script lang="ts">
	import TechnologyStack from './(components)/TechnologyStack.svelte';
	import Education from './(components)/Education.svelte';
	import JobExperience from './(components)/JobExperience.svelte';
	import FileDownload from './(components)/FileDownload.svelte';
	import Intrudaction from './(components)/Intrudaction.svelte';
	import Hardware from './(components)/Hardware.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
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
	<Education />
	<JobExperience />
	<Hardware />
	<FileDownload />
</div>
