<script lang="ts">
	import { goto } from '$app/navigation';
	import { pageSections } from '$lib';
	import {
		funContents,
		hobbyContents,
		pageContents,
		techContents,
		type PageContentsType
	} from '$lib/contents';
	import { onMount } from 'svelte';
	import Paragraph from './typography/Paragraph.svelte';

	type Props = {
		onModalItemClicked: () => void;
		searchValue: string;
	};

	let filteredPageSections: PageContentsType[] = $state([]);
	let filteredFunContents: PageContentsType[] = $state([]);
	let filteredPageContents: PageContentsType[] = $state([]);
	let filteredHobbyContents: PageContentsType[] = $state([]);
	let filteredTechContents: PageContentsType[] = $state([]);
	let step: number = $state(-1);
	let selectedPath: string = $state('');
	let itemRefs: HTMLButtonElement[] = [];

	const { onModalItemClicked, searchValue }: Props = $props();

	let everySingleContents = $derived([
		...filteredPageSections,
		...filteredTechContents,
		...filteredHobbyContents,
		...filteredFunContents,
		...filteredPageContents
	]);

	onMount(() => {
		assembleInitialListValue();
	});

	function assembleInitialListValue() {
		filteredPageSections = pageSections;
		filteredFunContents = funContents;
		filteredPageContents = pageContents;
		filteredHobbyContents = hobbyContents;
		filteredTechContents = techContents;
	}

	function searchStatement(item: PageContentsType, sectionName: string) {
		const lowerName = searchValue.toLowerCase();
		if (item.name.toLowerCase().includes(lowerName)) return true;
		if (item.description && item.description.toLowerCase().includes(lowerName)) return true;
		if (item.path.toLowerCase().includes(lowerName)) return true;
		if (sectionName.toLowerCase().includes(lowerName)) return true;
		return false;
	}

	$effect(() => {
		if (searchValue.length === 0) {
			assembleInitialListValue();
			return;
		}

		filteredPageSections = pageSections.filter((item) => searchStatement(item, 'Nawigacja'));
		filteredFunContents = funContents.filter((item) => searchStatement(item, 'Fun'));
		filteredPageContents = pageContents.filter((item) => searchStatement(item, 'Pozostałe'));
		filteredHobbyContents = hobbyContents.filter((item) => searchStatement(item, 'Hobby'));
		filteredTechContents = techContents.filter((item) => searchStatement(item, 'Technologia'));

		if (document.body.clientWidth > 1023) {
			step = 0;
		}
	});

	$effect(() => {
		if (itemRefs[step]) {
			itemRefs[step].scrollIntoView({
				block: 'center'
			});
		}
	});
</script>

<div class="flex h-100 flex-col gap-3 overflow-y-auto p-5">
	{#if filteredPageSections.length}
		<p class="text-neutral-400">⟹ NAWIGACJA</p>
		{#each filteredPageSections as { name, description, path }, i}
			{@render ModalItem(name, path, step === i, description, i)}
		{/each}
	{/if}

	{#if filteredTechContents.length}
		<p class="text-neutral-400">⟹ TECHNOLOGIA</p>
		{#each filteredTechContents as { name, description, path }, i (path)}
			{@render ModalItem(
				name,
				path,
				step === filteredPageSections.length + i,
				description,
				filteredPageSections.length + i
			)}
		{/each}
	{/if}

	{#if filteredHobbyContents.length}
		<p class="text-neutral-400">⟹ HOBBY</p>
		{#each filteredHobbyContents as { name, description, path }, i (path)}
			{@render ModalItem(
				name,
				path,
				step === filteredPageSections.length + filteredTechContents.length + i,
				description,
				filteredPageSections.length + filteredTechContents.length + i
			)}
		{/each}
	{/if}

	{#if filteredFunContents.length}
		<p class="text-neutral-400">⟹ FUN</p>
		{#each filteredFunContents as { name, description, path }, i (path)}
			{@render ModalItem(
				name,
				path,
				step ===
					filteredPageSections.length +
						filteredTechContents.length +
						filteredHobbyContents.length +
						i,
				description,
				filteredPageSections.length + filteredTechContents.length + filteredHobbyContents.length + i
			)}
		{/each}
	{/if}

	{#if filteredPageContents.length}
		<p class="text-neutral-400">⟹ POZOSTAŁE</p>
		{#each filteredPageContents as { name, description, path }, i (path)}
			{@render ModalItem(
				name,
				path,
				step ===
					filteredPageSections.length +
						filteredTechContents.length +
						filteredHobbyContents.length +
						filteredFunContents.length +
						i,
				description,
				filteredPageSections.length +
					filteredTechContents.length +
					filteredHobbyContents.length +
					filteredFunContents.length +
					i
			)}
		{/each}
	{/if}
</div>

{#snippet ModalItem(
	title: string,
	path: string,
	highlighted: boolean,
	description?: string,
	index: number
)}
	<button
		bind:this={itemRefs[index]}
		onclick={() => {
			onModalItemClicked();
			goto(path);
		}}
		class={`flex cursor-pointer items-center justify-start gap-4 border ${
			highlighted ? 'border-white bg-neutral-800/60' : 'border-neutral-800/60'
		} p-5 hover:bg-neutral-800/60 focus:outline-none`}
	>
		<div class="flex size-10 items-center justify-center rounded-md border border-neutral-800/60">
			<Paragraph class="text-2xl text-white">#</Paragraph>
		</div>
		<div class="flex flex-col items-start">
			<p class="text-[12px]">{title.toUpperCase()}</p>
			<Paragraph class="text-md text-start text-neutral-400">{description}</Paragraph>
		</div>
	</button>
{/snippet}

<svelte:window
	onkeydown={(e) => {
		const listLen = everySingleContents.length - 1;
		if (listLen < 0) return;

		if (e.key === 'ArrowDown') {
			step = step < listLen ? step + 1 : 0;
			selectedPath = everySingleContents[step].path;
		}

		if (e.key === 'ArrowUp') {
			step = step > 0 ? step - 1 : listLen;
			selectedPath = everySingleContents[step].path;
		}

		// Enter otwiera wybraną pozycję
		if (e.key === 'Enter' && everySingleContents[step]) {
			onModalItemClicked();
			goto(everySingleContents[step].path);
		}
	}}
/>
