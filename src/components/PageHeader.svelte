<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { pageSections } from '$lib/static';
	import DiscordActivityPill from './discord/DiscordActivityPill.svelte';
	import SpotifyStatus from './SpotifyStatus.svelte';

	import { goto } from '$app/navigation';
	import RenovationAlert from '../routes/about-me/sectors/components/RenovationAlert.svelte';

	let menu: HTMLElement | null = null;
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
		gsap.to(menu, {
			x: isOpen ? 0 : '-200%',
			duration: 0.5,
			ease: 'power2.out'
		});
	}

	function handleResize() {
		if (isOpen) {
			gsap.to(menu, {
				x: isOpen ? '-200%' : 0,
				duration: 0.5,
				ease: 'power2.out'
			});
			isOpen = !isOpen;
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleResize);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.addEventListener('keydown', handleResize);
		};
	});
</script>

<header
	class="sticky top-0 z-10 flex items-center gap-1 py-5 select-none lg:relative lg:bg-transparent"
>
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="flex h-15 w-6xl items-center justify-between border-1 border-neutral-800/60 bg-neutral-900/60 backdrop-blur-sm lg:border-none lg:bg-transparent"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<h3 class="klimson-heading ml-10" onclick={() => goto('/')}>klimson.dev</h3>
		<div class="relative flex items-center justify-center">
			<img
				onclick={toggleMenu}
				class="group peer mr-10 h-10 w-10 cursor-pointer p-2 lg:hidden"
				alt="hamburger"
				src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF"
			/>

			<span
				onclick={toggleMenu}
				class="absolute right-5 -bottom-3 h-15 w-20 bg-transparent peer-hover:bg-white/50"
			>
			</span>
		</div>
	</div>
</header>

{#if isOpen}
	<div class="overlay" onclick={toggleMenu}></div>
{/if}

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<nav
	bind:this={menu}
	onclick={toggleMenu}
	class="sidebar flex flex-col bg-neutral-950 p-5 text-white"
>
	<div class="mb-4 flex gap-1">
		<span class="text-2xl text-green-500">{'>'}</span>
		<h1>Klimson <span class="code">_</span></h1>
	</div>
	{#each pageSections as { name, path }}
		<a href={path} class="mb-3 text-xl font-bold">{name}</a>
	{/each}
	<div class="h-2"></div>
	<RenovationAlert small />

	<!-- <DiscordActivityPill mobile /> -->
</nav>

<style>
	.klimson-heading {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		font-style: normal;
		font-size: 25px;
		letter-spacing: 0.5px;
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 40vh;
		height: 100vh;

		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
		transform: translateX(-200%);
		z-index: 40;
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.7);
		z-index: 40;
	}

	@keyframes code_animation {
		25% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.code {
		animation-name: code_animation;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	a {
		text-decoration: none;
		color: inherit;
		background-color: transparent;
	}
</style>
