<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { pageSections } from '$lib/static';
	import DiscordActivityPill from './discord/DiscordActivityPill.svelte';
	import SpotifyStatus from './SpotifyStatus.svelte';

	import { goto } from '$app/navigation';
	import RenovationAlert from '../routes/about-me/sectors/components/RenovationAlert.svelte';
	import Paragraph from './typography/Paragraph.svelte';

	import { Search, X } from 'lucide-svelte';
	import ProjectCard from '../routes/projects/(components)/ProjectCard.svelte';
	import type { Attachment } from 'svelte/attachments';

	function modalAnimation(): Attachment {
		return (element: Element) => {
			gsap.fromTo(element, { scaleY: 0.2, scaleX: 0.2, transformOrigin: 'bottom', opacity: 0, onComplete: () => {
				// inputEl.focus()
			} },
				{ scaleY: 1, scaleX: 1, duration: 0.4, opacity: 1, ease: 'power2.out' })
				
		}
	}
	let inputEl: HTMLInputElement
	let modalEl: HTMLDivElement

	let menu: HTMLElement | null = null;
	let isOpen = false;
	let modalOpened: boolean = $state(false);

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

	function closeModal() {
		
		if (modalEl) {
			gsap.to(modalEl, {
				scaleY: 0.2,
				scaleX: 0.15,
				opacity: 0,
				transformOrigin: 'bottom',
				duration: 0.3,
				ease: 'power2.in',
				onComplete: () => {
					modalOpened = false;
					document.body.style.overflow = 'auto';
				}
			});
		} else {
			
			modalOpened = false;
			document.body.style.overflow = 'auto';
		}
	}

	function openModal() {
		modalOpened = !modalOpened
		
		document.body.style.overflow = 'hidden';
		
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
		<h3
			class="klimson-heading ml-3 cursor-pointer bg-white px-2 text-black"
			onclick={() => goto('/')}
		>
			klimson.dev
		</h3>
		<div class="relative flex items-center justify-center">
			

			<Search onclick={openModal}
				class="group peer mr-3 h-10 w-10 cursor-pointer p-2 lg:hidden"/>

			<span
				onclick={openModal}
				class="absolute right-5 bg-red-500/50 -bottom-3 h-15 w-20 bg-transparent peer-hover:bg-white/50"
			>
			</span>
		</div>


			<button
				onclick={() => {
					openModal()
				}}
				class="mr-3 lg:flex hidden cursor-pointer items-center justify-between gap-2 rounded-md border border-neutral-800/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
			>
				<div class="flex gap-2 text-neutral-400">
					<Search />
					<div>
						<p>SZUKAJ...</p>
					</div>
				</div>

				<div class="rounded-full bg-neutral-700/60 p-1 px-2">
					<p class="text-[14px] text-neutral-400">CTRL + K</p>
				</div>
			</button>

	</div>
</header>

{#if isOpen}
	<div class="overlay" onclick={toggleMenu}></div>
{/if}

{@render Modal()}

{#snippet Modal()}
	{#if modalOpened}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onclick={() => {
				
				closeModal()
			}}
			class="fixed inset-0 z-10 flex items-center justify-center bg-black/50 text-white backdrop-blur-lg"
		>
			<div
				onclick={(a) => {
					a.stopPropagation();
				}}
				{@attach modalAnimation()}
				bind:this={modalEl}
				class="relative flex w-9/10 flex-col border border-neutral-800/60 bg-neutral-950 md:w-1/2 lg:w-1/2 lg:w-120 lg:bg-neutral-950"
			>
				<!-- header -->
				<div class="p-5">
					<input 
					bind:this={inputEl}
					class="border-1 text-neutral-400 w-full focus:outline-none p-3 border-neutral-800/60"/>
				</div>
				<div class="border-b-1 border-neutral-800/60"></div>
				<!-- scrollable content -->
				<div class="flex h-100 flex-col gap-3 overflow-y-auto p-5">
					

					{#each pageSections as { name, description, path }}
						{@render ModalItem(name, path, description)}
					{/each}
				</div>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet ModalItem(title: string, path: string, description?: string)}
	<button
		onclick={() => {
			closeModal()
			goto(path);
		}}
		class="flex cursor-pointer flex-col items-start justify-start border border-neutral-800/60 p-5 hover:bg-neutral-800/60"
	>
		<p class="text-[12px]">{title.toUpperCase()}</p>
		<Paragraph class="text-md text-neutral-400">{description}</Paragraph>
	</button>
{/snippet}

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

<svelte:window onkeydown={a => {
	if (a.key === "Escape") {
		closeModal()
	} 
}}></svelte:window>


