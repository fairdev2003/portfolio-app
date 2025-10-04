<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className: string;
		children: Snippet;
	};

	let { children, className = '' } = $props();
</script>

<div
	class={`box flex flex-col gap-5 border border-neutral-700/60 bg-neutral-900/60 p-10 ${className}`}
>
	{@render children()}
</div>
