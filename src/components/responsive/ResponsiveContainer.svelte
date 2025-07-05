<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		cols?: number | string;
		className?: string;
	};
	const { children, cols = 2, className = '' }: Props = $props();
</script>

<div class={`col-span-${cols} ${className} text-white`}>
	{@render children()}
</div>
