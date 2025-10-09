<script lang="ts">
	import './cyberspace.css';
	import Maniek2 from './assets/graphics/retro_maniek86.gif';
	import Maniek1 from './assets/graphics/maniek.png';
	import RetroButton from './components/RetroButton.svelte';
	import { onMount } from 'svelte';

	let colored: boolean = $state(false);

	onMount(() => {
		setInterval(() => {
			colored = !colored;
		}, 500);
	});
</script>

<div class="flex flex-col items-center justify-center gap-5 p-5">
	{#if colored}
		<h1 class="retro-p text-5xl text-red-500">Welcome to Cyber Space!</h1>
	{:else}
		<h1 class="retro-p text-5xl text-white">Welcome to Cyber Space!</h1>
	{/if}
	<div class="flex gap-2">
		{@render Graphic1()}
		{@render Graphic2()}
	</div>

	<RetroButton />
</div>

{#snippet Graphic1()}
	<a href="https://maniek86.xyz">
		<img src={Maniek1} alt="maniek" class="h-[31px] w-[88px]" />
	</a>
{/snippet}
{#snippet Graphic2()}
	<a href="https://maniek86.xyz">
		<img src={Maniek2} alt="maniek" class="h-[31px] w-[88px]" />
	</a>
{/snippet}

<svelte:head>
	<title>Retrospace | Klimson</title>
	<meta name="description" content="Retro View!" />
</svelte:head>

<style>
	@font-face {
		font-family: 'WindowsRegular';
		src: url('/WindowsRegular.ttf') format('truetype');
	}

	h1 {
		font-family: 'WindowsRegular';
	}

	:global(body) {
		cursor: url('assets/graphics/Cursor79.png'), auto;
	}
</style>
