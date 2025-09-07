<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let { children } = $props();

	onMount(() => { if (!container) return; if (browser) { gsap.from(container, { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }); } });

	let container: HTMLDivElement;

</script>


<div class="grid-cols-3 lg:grid" bind:this={container}>
	{@render children()}
</div>
