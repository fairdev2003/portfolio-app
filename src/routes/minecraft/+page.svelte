<script lang="ts">
	import Heading from '../../components/typography/Heading.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
</script>

<div class="flex flex-col gap-3">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'MINECRAFT', route: '/minecraft' }
		]}
	/>
	<div class="mb-5 flex flex-col gap-3">
		<Heading>Minecraft.</Heading>
	</div>
</div>
