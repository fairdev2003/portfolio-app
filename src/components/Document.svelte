<script lang="ts">
	import { ProportionsIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		className: string;
		children: Snippet;
		customPaging?: string;
		disabledPages?: boolean;
	} & HTMLAttributes<HTMLDivElement>;

	let {
		customPaging = '1/1',
		disabledPages = false,
		children,
		className = '',
		...props
	} = $props();
</script>

<div
	class={`${props.class} box relative flex flex-col gap-5 border border-neutral-700/60 bg-neutral-900/60 p-10`}
	{...props}
>
	{@render children()}
	{#if !disabledPages}
		<p class="absolute right-8 bottom-4 text-white/70">{customPaging}</p>
	{/if}
</div>

<style>
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
