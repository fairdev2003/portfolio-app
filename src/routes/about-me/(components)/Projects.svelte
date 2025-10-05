<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import TestPasek from '../../../components/TestPasek.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import PortfolioApp from '../static/projects/PortfolioApp.svelte';
	import gsap from 'gsap';
	import { animate } from 'framer-motion';
	import { X } from 'lucide-svelte';
	import { projects } from '../static/projects';
	import ProjectCard from './ProjectCard.svelte';

	type ProjectType = 'portfolio' | 'klimson-server' | 'modopedia' | 'clan-manager';
	let selectedPrtoject: string = $state('portfolio');
	let modalOpened: boolean = $state(false);
	let contentEl: HTMLDivElement
	let modalEl: HTMLDivElement

	function openModal() {
		modalOpened = !modalOpened
		document.body.style.overflow = 'hidden';
	}


	function closeModal() {
		// animate out
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
			// fallback if no ref
			modalOpened = false;
			document.body.style.overflow = 'auto';
		}
	}

	

	function contentAnimation(): Attachment {
		return (element: Element) => {
			gsap.fromTo(element, {opacity: 1}, {opacity: 1, delay: 0.5})
		}
	}

	function modalAnimation(): Attachment {
		return (element: Element) => {
			gsap.fromTo(element, { scaleY: 0.2, scaleX: 0.15, transformOrigin: 'bottom', opacity: 0 },
				{ scaleY: 1, scaleX: 1, duration: 0.4, opacity: 1, ease: 'power2.out' })
				
		}
	}

	const modalMount: Attachment = (element) => {
		return () => {
			console.log('cleaning up');
		};
	};
</script>

<div class="flex flex-col gap-5">
	<Heading padding id="Projekty">Projekty</Heading>
	
	<div class="flex flex-col gap-3">
		{#each projects as project}
			<ProjectCard onClick={() => {
				selectedPrtoject = project.id
				openModal()
			}} name={project.name} description={project.description} logo={project.logo}/>
		{/each}

		<!-- {@render ProjectCardSvelte()}
		{@render ProjectCardGolangTest()}
		{@render ProjectCardPythonTest()}
		{@render ProjectCardReactTest()} -->
	</div>
</div>

{@render Modal()}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#snippet ProjectCardSvelte()}
	
	<div
		onclick={() => {
			selectedPrtoject = "portfolio"
			openModal()
		}}
		class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
	>
		<div class="flex-shrink-0">
			<div class="flex size-18 items-center justify-center rounded-md bg-orange-500/20">
				<img
					alt="svelte"
					class="size-10"
					src="https://icon.icepanel.io/Technology/svg/Svelte.svg"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-[20px]">Portfolio App</h3>
			<p class="text-[15px] text-neutral-400">Dzięki temu projektowi widzisz ten tekst</p>
		</div>
	</div>
{/snippet}

{#snippet ProjectCardGolangTest()}
	<div
		class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
	>
		
		<div class="flex-shrink-0">
			<div class="flex size-18 items-center justify-center rounded-md bg-cyan-500/20">
				<img alt="svelte" class="size-10" src="https://icon.icepanel.io/Technology/svg/Go.svg" />
			</div>
		</div>

		
		<div class="flex min-w-0 flex-col">
			<h3 class="truncate text-[20px] sm:whitespace-normal">Klimson Server</h3>
			<p class="text-[15px] break-words text-neutral-400">
				Moge sprawnie zarządzać strukturą moich plików i serwisów i nawet jeśli tekst będzie dużo
				dłuższy, to się złamie zamiast rozwalać layout.
			</p>
		</div>
	</div>
{/snippet}

{#snippet ProjectCardPythonTest()}
	<div
		class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
	>
		
		<div class="flex-shrink-0">
			<div class="flex size-18 items-center justify-center rounded-md bg-yellow-500/20">
				<img
					alt="svelte"
					class="size-10"
					src="https://icon.icepanel.io/Technology/svg/Python.svg"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-[20px]">Clan Manager Discord Bot</h3>
			<p class="text-[15px] text-neutral-400">
				Sprawne zarządzanie graczami na discordzie i ich integracja
			</p>
		</div>
	</div>
{/snippet}

{#snippet ProjectCardReactTest()}
	<div
		class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 transition-colors hover:bg-neutral-800/60"
	>
		<div class="flex-shrink-0">
			<div class="flex size-18 items-center justify-center rounded-md bg-blue-500/20">
				<img alt="svelte" class="size-10" src="https://icon.icepanel.io/Technology/svg/React.svg" />
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-[20px]">Modopedia App</h3>
			<p class="text-[15px] text-neutral-400">Łatwe wyszukiwanie modów i ich zawartości</p>
		</div>
	</div>
{/snippet}

{#snippet Modal()}
	{#if modalOpened}
		<div {@attach modalMount} class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white">
			<div
				{@attach modalAnimation()}
				bind:this={modalEl}
				class="relative flex h-[95%] w-[90%] lg:w-7xl max-w-3xl flex-col border border-neutral-800/60 bg-neutral-950"
			>	
				<!-- header -->
				<div class="h-10 flex items-center flex-shrink-0 border-b border-neutral-700/60 justify-between px-5 bg-neutral-800/60 mb-2">
					<div class="flex justify-center w-full">
						<p class="text-[18px]">{selectedPrtoject}</p>
					</div>
					<button onclick={() => closeModal()} class="hover:bg-white/10 text-neutral-500 rounded-full p-0.5 cursor-pointer">
						<X/>
					</button>
				</div>
				
				<!-- scrollable content -->
				<div {@attach contentAnimation()} bind:this={contentEl} class="flex-1 overflow-y-auto p-6 pt-5">
					{#if selectedPrtoject === 'portfolio'}
						<PortfolioApp />
					{/if}
				</div>

				
			</div>
		</div>
	{/if}
{/snippet}

<style>
	h3 {
		font-family: 'DM Serif Display', serif;
	}
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
