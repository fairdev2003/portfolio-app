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
			{ name: 'ADHD', route: '/adhd' }
		]}
	/>
	<Heading>ADHD.</Heading>
</div>
