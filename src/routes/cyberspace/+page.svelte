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

<div class="flex flex-col gap-5 p-5">
	{#if colored}
		<p class="retro-p text-4xl text-red-500">Cyber Space</p>
	{:else}
		<p class="retro-p text-4xl text-white">Cyber Space</p>
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
	<title>Retrospace</title>
	<meta name="description" content="Retro View!" />
</svelte:head>

<style>
	@font-face {
		font-family: 'WindowsRegular';
		src: url('/WindowsRegular.ttf') format('truetype');
	}

	p {
		font-family: 'WindowsRegular';
	}

	:global(body) {
		cursor: url('assets/graphics/Cursor79.png'), auto;
	}
</style>
