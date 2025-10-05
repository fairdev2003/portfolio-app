<script lang="ts">
	import Box from '../../components/Document.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
</script>

<div class="col-span-2 flex flex-col gap-y-5">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'PROGRAMOWANIE', route: '/coding' }
		]}
	/>
	<Heading>Programowanie.</Heading>
	<div class="mx-auto mt-10 flex">
		<Paragraph>{'Tu nic nie ma :<'}</Paragraph>
	</div>
</div>
