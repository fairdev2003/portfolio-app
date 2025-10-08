<script lang="ts">
	import { quotes } from '$lib/static';
	import Heading from '../../components/typography/Heading.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import QuoteBox from './(components)/QuoteBox.svelte';
</script>

<div class="col-span-2 flex flex-col gap-10">
	<div>
		<PagesNavigation
			pages={[
				{ name: 'KLIMSON', route: '/' },
				{ name: 'CYTATY', route: '/quotes' }
			]}
		/>
		<Heading>Cytaty</Heading>
	</div>

	{#each quotes as quote}
		<QuoteBox quote={quote.quote} author={quote.author} path={quote.path} />
	{/each}
</div>

<style>
</style>
