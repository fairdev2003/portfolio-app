<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { children } = $props();

	let container: HTMLDivElement;
</script>

<div class="grid-cols-3 lg:grid" bind:this={container}>
	{@render children()}
</div>
