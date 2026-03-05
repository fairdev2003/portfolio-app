<script lang="ts">
	import type { ImageListItem } from '../../types/storage.types';
	import Heading from '../typography/Heading.svelte';
	import Paragraph from '../typography/Paragraph.svelte';

	type Props = {
		heading: string;
		description: string;
		imageList: ImageListItem[];
	};

	let { description, heading, imageList }: Props = $props();
</script>

<div
	class="h-auto cursor-pointer border border-neutral-800/60 bg-neutral-900/60 p-2 p-5 text-sm hover:bg-neutral-800/60"
>
	<div class="mb-5 flex flex-col gap-3">
		<Heading idTrackingDisabled>{heading}</Heading>
		<Paragraph>{description}</Paragraph>
	</div>
	<div class="grid grid-cols-2 gap-2">
		{#each imageList as listItem, i}
			<div
				class="h-30 overflow-hidden rounded border border-neutral-700 bg-black/20
                {i === 2 && imageList.length === 3 ? 'col-span-2' : 'col-span-1'}"
			>
				<img src={listItem.url} alt="Galeria" class="h-full w-full object-cover" />
			</div>
		{/each}
	</div>
</div>

{#snippet Image(url: string)}{/snippet}
