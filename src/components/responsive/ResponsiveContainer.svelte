<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { browser } from '$app/environment';

	type Props = {
		children: Snippet;
		cols?: number | string;
		className?: string;
	};

	const { children, cols = 2, className = '' }: Props = $props();

	const baseClass = `text-white ${className}`;
	const colClass = `col-span-${cols}`;

	let container: HTMLDivElement;
	
	
</script>

<div bind:this={container} class={`${colClass} ${baseClass}`}>
	{@render children()}
</div>
