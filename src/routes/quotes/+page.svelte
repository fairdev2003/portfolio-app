<script lang="ts">
	import { quotes } from '$lib/static';
	import QuoteBox from './(components)/QuoteBox.svelte';
</script>

<div class="flex flex-col gap-5 col-span-2">
	{#each quotes as quote}
		<QuoteBox quote={quote.quote} author={quote.author} path={quote.path}/>
	{/each}
</div>