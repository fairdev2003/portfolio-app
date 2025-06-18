<script lang="ts">
	import TechnologyStack from './(components)/TechnologyStack.svelte';
	import Education from './(components)/Education.svelte';

	import JobExperience from './(components)/JobExperience.svelte';
	import FileDownload from './(components)/FileDownload.svelte';
	import Intrudaction from './(components)/Intrudaction.svelte';
	import Hardware from './(components)/Hardware.svelte';
</script>

<div class="flex flex-col gap-12 px-5 lg:col-span-2">
	<Intrudaction />
	<TechnologyStack />
	<Education />
	<JobExperience />
	<Hardware />
	<FileDownload />
</div>
