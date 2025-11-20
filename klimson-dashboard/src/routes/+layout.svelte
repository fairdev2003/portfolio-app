<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import ResponsiveWrapper from '$lib/components/responsive/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-[100vh] w-[100%] bg-neutral-950 text-white">
	<ResponsiveWrapper>
		{@render children?.()}
	</ResponsiveWrapper>
</div>
