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

<div class="flex scale-120 flex-col items-center justify-center gap-3 p-5">
	<a href={'/'} class="flex gap-2">
		<p>{'<---'}</p>
		<p>Go back to future</p>
	</a>
	<div class="flex flex-col items-center justify-center gap-2">
		{#if colored}
			<h1 class="retro-p text-5xl text-red-500">Welcome to Cyber Space!</h1>
		{:else}
			<h1 class="retro-p text-5xl text-white">Welcome to Cyber Space!</h1>
		{/if}
		<p>Welcome to national place for web astrounauts. Keep eyes on aliens!</p>
	</div>
	<div class="mt-3">
		{@render Graphic3()}
	</div>
</div>

<div class="relative">
	<!-- svelte-ignore a11y_missing_attribute -->
</div>

{#snippet Graphic1()}
	<a href="https://maniek86.xyz">
		<img src={Maniek1} alt="maniek" class="h-[31px] w-[88px]" />
	</a>
{/snippet}
{#snippet Graphic3()}
	<a href="/cyberspace/index">
		<img src="https://anlucas.neocities.org/Navbentr.gif" alt="enter-button" class="scale-110" />
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

	h1,
	p {
		font-family: 'WindowsRegular';
		text-align: center;
	}

	.spacing {
		color: blue;
		letter-spacing: 5px;
	}

	.spacing:hover {
		text-decoration: underline blue;
	}

	a {
		color: white;
	}

	:global(body) {
		cursor: url('assets/graphics/Cursor79.png'), auto;
	}
</style>
