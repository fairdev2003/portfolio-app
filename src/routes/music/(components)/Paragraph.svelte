<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<p class="heading text-md text-white/70">{@render children()}</p>

<style>
</style>
