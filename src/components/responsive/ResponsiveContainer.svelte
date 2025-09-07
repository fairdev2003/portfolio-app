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
	
	// onMount(() => { if (!container) return; if (browser) { gsap.from(container, { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }); } });
	
</script>

<div bind:this={container} class={`${colClass} ${baseClass}`}>
	{@render children()}
</div>
