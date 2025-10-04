<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAttributes<HTMLHeadingElement>;

	const { children, ...props }: Props = $props();
</script>

<h1 {...props} class={`heading text-3xl ${props.class}`}>{@render children()}</h1>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
</style>
