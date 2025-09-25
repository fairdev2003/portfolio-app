<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href?: string;
		left?: boolean;
		right?: boolean;
	};

	const { children, href = '', right = false, left = false }: Props = $props();
</script>

<button
	onclick={() => {
		goto(href);
	}}
	class="box cursor-pointer rounded-lg border-1 border-gray-950 p-2 px-6 text-sm transition-colors hover:bg-gray-800"
>
	{left ? '<' : ''}
	{@render children()}
	{right ? '>' : ''}
</button>
