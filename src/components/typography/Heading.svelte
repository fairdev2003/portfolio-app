<script lang="ts">
	import { goto } from '$app/navigation';
	import { data } from 'framer-motion/client';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
		padding?: boolean;
		idTrackingDisabled?: boolean;
	} & HTMLAttributes<HTMLHeadingElement>;

	const { padding = false, idTrackingDisabled = false, children, ...props }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<h1
	{...props}
	id={props.id}
	class={`heading group relative text-3xl ${props.class} ${padding && 'pt-5'}`}
>
	<span>{@render children()}</span>

	{#if !idTrackingDisabled}
		<span
			class={`hidden lg:absolute ${padding ? 'top-5' : 'top-0'} -left-6 hidden cursor-pointer text-neutral-500 transition-opacity group-hover:flex`}
			>#</span
		>
		<span
			onclick={() => {
				if (!props.id) return;
				const url = location.origin + location.pathname + '#' + props.id;
				goto(url);
			}}
			class={`group-hover:flex lg:absolute ${padding ? 'top-5' : 'top-0'} -left-6 size-6 cursor-pointer text-neutral-500`}
		></span>
	{/if}
</h1>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
</style>
