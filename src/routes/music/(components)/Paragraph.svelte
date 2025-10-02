<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<p class="heading text-md text-neutral-500">{@render children()}</p>

<style>
</style>
