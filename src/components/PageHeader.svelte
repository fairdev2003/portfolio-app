<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from 'svelte';
	import { pageSections } from '$lib/static';

	let menu: HTMLElement | null = null;
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
		gsap.to(menu, {
			x: isOpen ? 0 : "-200%",
			duration: 0.5,
			ease: "power2.out"
		});
	}

	function handleResize() {
		if (isOpen) {

			gsap.to(menu, {
				x: isOpen ? "-200%" : 0,
				duration: 0.5,
				ease: "power2.out"
			});
			isOpen = !isOpen;
		}
	}



	onMount(() => {
		window.addEventListener("keydown", handleResize);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.addEventListener("keydown", handleResize);
		}
	})
</script>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 40vh;
        height: 100vh;
        background: #0a0a1c;
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
        transform: translateX(-200%);
        z-index: 50;
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
		}
</style>



<header class="sticky lg:relative z-10 top-0 py-5 bg-[#0a0a1c] lg:bg-transparent flex pb-5 items-center gap-1 select-none">
	<div class="flex gap-1">
		<span class="text-green-500 text-2xl">{">"}</span>
		<h1>Klimson <span class="code">_</span></h1>
	</div>
	<div class="flex-grow"></div>
	<div class="relative flex lg:hidden">
		<img on:click={toggleMenu} class="w-10 h-10 cursor-pointer" alt="hamburger"
				 src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF">
	</div>
</header>

{#if isOpen}
	<div class="overlay" on:click={toggleMenu}></div>
{/if}


<nav bind:this={menu} on:click={toggleMenu} class="sidebar flex flex-col p-5 text-white">
	<div class="flex gap-1 mb-4">
		<span class="text-green-500 text-2xl">{">"}</span>
		<h1>Klimson <span class="code">_</span></h1>
	</div>
	{#each pageSections as {name, path}}
		<a href={path} class="mb-3 text-xl font-bold">{name}</a>
	{/each}
</nav>
