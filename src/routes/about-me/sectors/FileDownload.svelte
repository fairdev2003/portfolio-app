<script>
	import FileDownloadCard from '../../../components/FileDownloadCard.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import RenovationAlert from './components/RenovationAlert.svelte';
</script>

<div class="flex flex-col gap-4">
	<Heading padding id="Pliki-do-pobrania">Pliki do pobrania</Heading>

	<RenovationAlert />
</div>

{#snippet FileDownloadSnippet()}
	<FileDownloadCard size="65,5 kB" path="" filename="Jakub-Klimkiewicz-CV.pdf" />
	<FileDownloadCard size="65,5 kB" path="" filename="Jakub-Klimkiewicz-CV.pdf" />
{/snippet}
