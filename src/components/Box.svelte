<script lang="ts">
	import { ProportionsIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		className: string;
		children: Snippet;
	} & HTMLAttributes<HTMLDivElement>;

	let { children, className = '', ...props } = $props();
</script>

<div
	class={`${props.class} box flex flex-col gap-5 border border-neutral-700/60 bg-neutral-900/60 p-10`}
	{...props}
>
	{@render children()}
</div>
