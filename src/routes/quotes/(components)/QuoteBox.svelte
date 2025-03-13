<script lang="ts">
	import Box from '../../../components/Box.svelte';
	import AnimatedLink from '../../../components/AnimatedLink.svelte';

	type QuoteBoxProps = {
		quote: string;
		author: string;
		path?: string;
	}

	let { quote, author, path } : QuoteBoxProps = $props()
</script>


<Box>
	<i>"{quote}"</i>
	<div class="flex justify-end">
		<p>~~ {author}</p>
	</div>

	{#if path}
		<div class="mt-5">
			<AnimatedLink href={`/quote/${path}`} text="Zobacz"/>
		</div>
	{/if}

</Box>