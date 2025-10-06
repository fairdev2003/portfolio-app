<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import gsap from 'gsap';
	import { X } from 'lucide-svelte';

	import ProjectCard from './components/ProjectCard.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import { projects } from '../static/projects';
	import type { Project } from '../static/project.types';
	import ProjectPage from '../static/projects/components/ProjectPage.svelte';
	import { onMount, tick } from 'svelte';
	import PagesNavigation from '../../../components/typography/PagesNavigation.svelte';
	import Paragraph from '../../../components/typography/Paragraph.svelte';

	type ProjectType = 'portfolio' | 'klimson-server' | 'modopedia' | 'clan-manager';
	let selectedId: string = $state('klimson-server');
	let modalOpened: boolean = $state(false);
	let selectedProject: Project | undefined = $state(projects[0])
	// svelte-ignore non_reactive_update
	let contentEl: HTMLDivElement
	// svelte-ignore non_reactive_update
	let modalEl: HTMLDivElement

	function openModal() {
		modalOpened = !modalOpened
		document.body.style.overflow = 'hidden';
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

	function modalMount(): Attachment {
		return (element: Element) => {
			gsap.fromTo(element, {opacity: 0}, {opacity: 1, duration: 0.1})

			const url = new URL(window.location.href);
				if (url.searchParams.has('openProject')) {
					url.searchParams.delete('openProject');
					window.history.replaceState({}, '', url.toString());
				}
			}
	}

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const id = params.get('openProject');

		await tick()

		const ids: string[] = projects.map(i => i.id)
		

		if (id && ids.includes(id)) {
			selectedId = id;
			openModal();
		}
	});

	type Props = {
		blockPagesNavigation?: boolean
	}
	const { blockPagesNavigation = false }: Props = $props()
	
</script>

<div class="flex flex-col gap-3 mb-5">
	{#if !blockPagesNavigation}
		<PagesNavigation pages={[
		{name: "KLIMSON", route: "/"},
		{name: "PROJEKTY", route: "/projects"}
	]}/>	
	{/if}
	
	<Heading id="Projekty" padding class={blockPagesNavigation ? "mt-5" : ""}>Projekty</Heading>
	{#if blockPagesNavigation}
		<Paragraph><a href="/projects?openProject=portfolio">Odtwórz strone z opisem tej strony {"klimson.dev"}</a></Paragraph>
	{/if}
	
	<Paragraph class="text-red-400">{"[Kliknij na kafelki poniżej cii]"}</Paragraph>
	<div class="flex flex-col gap-3">
		{#each projects as project}
			<ProjectCard onClick={() => {
				selectedId = project.id
				openModal()
			}} name={project.name} description={project.description} logo={project.logo}/>
		{/each}

		
	</div>
</div>

{@render Modal(selectedId)}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#snippet Modal(id: string)}
	{#if modalOpened}
		<div {@attach modalMount()} class="fixed lg:backdrop-blur-lg md:backdrop-blur-lg inset-0 z-50 flex items-center justify-center bg-black/50 text-white">
			<div
				{@attach modalAnimation()}
				bind:this={modalEl}
				class="relative flex h-[99%] lg:h-[95%] w-[98%] lg:w-7xl max-w-3xl flex-col border border-neutral-800/60 lg:bg-neutral-950 bg-neutral-950/60 md:backdrop-blur-none backdrop-blur-lg"
			>	
				<!-- header -->
				<div class="h-10 flex  items-center flex-shrink-0 border-b border-neutral-700/60 justify-between px-5 bg-neutral-800/60 mb-2">
					<div class="flex justify-center w-full">
						<p class="text-[18px]">{projects.find(p => p.id == id)?.name}</p>
					</div>
					<button onclick={() => closeModal()} class="hover:bg-white/10 text-neutral-500 rounded-full p-0.5 cursor-pointer">
						<X/>
					</button>
				</div>
				
				<!-- scrollable content -->
				<div {@attach contentAnimation()} bind:this={contentEl} class="flex-1 overflow-y-auto p-6 pt-5">
					<ProjectPage {id}/>
				</div>
			
			</div>
		</div>
	{/if}
{/snippet}

<style>
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
		
	}
</style>
