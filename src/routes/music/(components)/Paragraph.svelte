<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAttributes<HTMLParagraphElement>;

	const { children, ...props }: Props = $props();
</script>

<p class="heading text-md text-white/70" {...props}>
	{@render children()}
</p>
