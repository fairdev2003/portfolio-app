<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Paragraph from './Paragraph.svelte';

	type Props = {
		children: Snippet;
		white?: boolean;
	} & HTMLAttributes<HTMLParagraphElement>;

	const { white = false, children, ...props }: Props = $props();
</script>

<div class="flex gap-3 text-white" {...props}>
	<div class="w-1 self-stretch rounded-full bg-neutral-500" />
	<Paragraph class="flex-1 leading-relaxed text-neutral-400">{@render children()}</Paragraph>
</div>
