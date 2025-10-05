<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let { text, href } = $props();

	let box: HTMLElement | null = null;
	onMount(() => {
		gsap.set(box, { x: 0 });
	});

	function onHover() {
		gsap.to(box, { x: 10, duration: 0.3, ease: 'power2.out' }); // Moves right on hover
	}

	function onLeave() {
		gsap.to(box, { x: 0, duration: 0.3, ease: 'power2.out' }); // Moves back on leave
	}
</script>

<div class="flex justify-end">
	<a
		bind:this={box}
		class="flex items-center gap-1.5 text-white"
		{href}
		on:mouseleave={onLeave}
		on:mouseenter={onHover}
	>
		<p class="text-sm">{text}</p>
		<img
			alt="arrow-right"
			class="h-3 w-3"
			src="https://img.icons8.com/?size=100&id=60&format=png&color=FFFFFF"
		/>
	</a>
</div>

<style>
	a {
		text-decoration: none;
		color: white;
	}
</style>
