<script lang="ts">
	import { quotes } from '$lib/static';
	import QuoteBox from './(components)/QuoteBox.svelte';
</script>

<div class="flex flex-col gap-10 col-span-2">
	<h1>Cytaty</h1>
	{#each quotes as quote}
		<QuoteBox quote={quote.quote} author={quote.author} path={quote.path}/>
	{/each}
</div>