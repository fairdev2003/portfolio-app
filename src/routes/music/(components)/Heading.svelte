<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<h1 class="heading text-3xl">{@render children()}</h1>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;

		letter-spacing: 0.5px;
	}
</style>
