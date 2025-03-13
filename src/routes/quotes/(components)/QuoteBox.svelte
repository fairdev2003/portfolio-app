<script lang="ts">
	import Box from '../../../components/Box.svelte';
	import AnimatedLink from '../../../components/AnimatedLink.svelte';

	let { quote, author, path } = $props()
</script>


<Box>
	<i>"{quote}"</i>
	<div class="flex justify-end">
		<p>~~ {author}</p>
	</div>
	{#if path}
		<AnimatedLink href={`/quote/${path}`} text="Zobacz"/>
	{/if}
</Box>