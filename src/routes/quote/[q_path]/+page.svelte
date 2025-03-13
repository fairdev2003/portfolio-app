<script lang="ts">
	import { quotes } from "$lib/static"
	import type { QuoteProps } from "$lib/static"
	import { onMount } from 'svelte';
	import QuoteBox from '../../quotes/(components)/QuoteBox.svelte';
	export let data : {
		q_path: string;
	};
	let validPath: boolean = false
	let quote : QuoteProps;

	onMount(() => {
		console.log(data.q_path);
		quotes.map((q) => {
			if (q.path === data.q_path) {
				validPath = true;
				quote = q;
				return;
			}
		})
	})
</script>

<div class="col-span-2">
	{#if validPath}
		<QuoteBox quote={quote.quote} author={quote.author}></QuoteBox>
	{/if}


	{#if !validPath}
		Not valid path
	{/if}
</div>
