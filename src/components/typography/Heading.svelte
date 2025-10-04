<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAttributes<HTMLHeadingElement>;

	const { children, ...props }: Props = $props();
</script>

<h1 {...props} class={`heading group relative text-3xl ${props.class}`}>
	<span>{@render children()}</span>

	<span class="absolute top-0 -left-6 hidden cursor-pointer text-neutral-500 group-hover:flex"
		>#</span
	>
	<span class="absolute top-0 -left-6 size-6 cursor-pointer text-neutral-500"></span>
</h1>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
</style>
