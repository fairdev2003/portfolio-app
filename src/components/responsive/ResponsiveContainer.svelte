<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		cols?: number | string;
		className?: string;
	};

	const { children, cols = 2, className = '' }: Props = $props();

	const baseClass = `text-white ${className}`;
	const colClass = `col-span-${cols}`;
</script>

<div class={`${colClass} ${baseClass}`}>
	{@render children()}
</div>
