<script lang="ts">
	import Box from '../../../components/Document.svelte';
	import AnimatedLink from '../../../components/AnimatedLink.svelte';
	import Paragraph from '../../../components/typography/Paragraph.svelte';

	type QuoteBoxProps = {
		quote: string;
		author: string;
		path?: string;
	};

	let { quote, author, path }: QuoteBoxProps = $props();
</script>

<Box disabledPages>
	<Paragraph>"{quote}"</Paragraph>
	<div class="flex justify-end">
		<Paragraph class="font-bold text-white">~~ {author}</Paragraph>
	</div>

	{#if path}
		<div class="mt-5">
			<AnimatedLink href={`/quote/${path}`} text="ZOBACZ" />
		</div>
	{/if}
</Box>
