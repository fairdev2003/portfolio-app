<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className: string;
		children: Snippet;
	};

	let { children, className = '' } = $props();
</script>

<div class={`box flex flex-col gap-5 rounded-xl bg-neutral-800/40 p-10 ${className}`}>
	{@render children()}
</div>
