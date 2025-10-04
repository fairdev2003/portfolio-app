<script lang="ts">
	import { goto } from '$app/navigation';
	import { data } from 'framer-motion/client';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAttributes<HTMLHeadingElement>;

	const { children, ...props }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<h1 {...props} id={props.id} class={`heading group relative pt-5 text-3xl ${props.class}`}>
	<span>{@render children()}</span>

	<span
		class="absolute top-5 -left-6 hidden cursor-pointer text-neutral-500 transition-opacity group-hover:flex"
		>#</span
	>
	<span
		onclick={() => {
			const url = location.origin + location.pathname + '#' + props.id;
			goto(url);
		}}
		class="absolute top-5 -left-6 size-6 cursor-pointer text-neutral-500"
	></span>
</h1>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
</style>
