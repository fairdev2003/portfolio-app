<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<script lang="ts">
	import type { ImageListItem } from '../../types/storage.types';
	import Heading from '../typography/Heading.svelte';
	import Paragraph from '../typography/Paragraph.svelte';
	import { fade, scale } from 'svelte/transition';

	let selectedIndex = $state<number | null>(null);

	const openModal = (index: number) => (selectedIndex = index);
	const closeModal = () => (selectedIndex = null);

	const nextImage = (e: MouseEvent) => {
		e.stopPropagation();
		if (selectedIndex !== null) selectedIndex = (selectedIndex + 1) % imageList.length;
	};

	const prevImage = (e: MouseEvent) => {
		e.stopPropagation();
		if (selectedIndex !== null)
			selectedIndex = (selectedIndex - 1 + imageList.length) % imageList.length;
	};

	type Props = {
		heading: string;
		description: string;
		imageList: ImageListItem[];
	};

	let { description, heading, imageList }: Props = $props();
</script>

<svelte:window
	onkeydown={(e) => {
		if (selectedIndex === null) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') nextImage(e as any);
		if (e.key === 'ArrowLeft') prevImage(e as any);
	}}
/>

<div
	onclick={() => openModal(0)}
	class="h-auto cursor-pointer border border-neutral-800/60 bg-neutral-900/60 p-4 text-sm hover:bg-neutral-800/60 md:p-5"
>
	<div class="mb-5 flex flex-col gap-3">
		<Heading idTrackingDisabled>{heading}</Heading>
		<Paragraph>{description}</Paragraph>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each imageList.slice(0, 3) as listItem, i}
			<div
				class="h-24 overflow-hidden rounded border border-neutral-700 bg-black/20 md:h-30
                {i === 2 ? 'col-span-2' : 'col-span-1'}"
			>
				<img src={listItem.url} alt="Galeria" class="h-full w-full object-cover" />
			</div>
		{/each}
	</div>
</div>

{#if selectedIndex !== null}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-[100] flex cursor-zoom-out flex-col items-center justify-center bg-black/95 p-2 md:p-4"
		onclick={closeModal}
	>
		<button
			class="absolute top-4 right-4 z-[120] p-2 text-4xl text-white/50 transition-colors hover:text-white"
			>&times;</button
		>

		<div
			onclick={(e) => e.stopPropagation()}
			class="relative flex h-full w-full max-w-5xl items-center justify-center"
		>
			<button
				class="absolute left-0 z-[110] p-2 text-white/30 transition-all hover:text-white active:scale-95 md:p-4"
				onclick={prevImage}
			>
				<svg class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/></svg
				>
			</button>

			<div
				transition:scale={{ duration: 250, start: 0.95 }}
				class="flex max-h-[90vh] w-[95vw] flex-col items-center justify-center border border-neutral-800/60 bg-neutral-950 pt-5 shadow-2xl md:w-full"
			>
				<div class="flex flex-1 items-center justify-center overflow-hidden p-2">
					<img
						src={imageList[selectedIndex].url}
						alt="Powiększenie"
						class="max-h-[50vh] w-auto max-w-full rounded-sm object-contain md:max-h-[65vh]"
					/>
				</div>

				<div class="h-auto w-full overflow-y-auto bg-neutral-950/80 p-4 md:p-5">
					<Paragraph class="text-lg leading-tight font-bold text-white md:text-xl">
						{imageList[selectedIndex].name}
					</Paragraph>
					<Paragraph class="mt-1 text-xs text-neutral-400 md:text-sm">
						{imageList[selectedIndex].description}
					</Paragraph>
				</div>
			</div>

			<button
				class="absolute right-0 z-[110] p-2 text-white/30 transition-all hover:text-white active:scale-95 md:p-4"
				onclick={nextImage}
			>
				<svg class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/></svg
				>
			</button>
		</div>
	</div>
{/if}

{#snippet Image(url: string)}{/snippet}
