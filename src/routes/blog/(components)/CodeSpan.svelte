<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
		children: Snippet;
	};
	const { className = '', children }: Props = $props();
</script>

<span class="bg-gray-700 p-1 text-gray-400">
	{children}
</span>
