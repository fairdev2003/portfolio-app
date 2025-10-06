<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Paragraph from '../typography/Paragraph.svelte';

	type Props = {
		name?: string;
		description?: string;
		src?: string;
		disabledBorder?: boolean;
	} & HTMLAttributes<HTMLImageElement>;

	const { name, description, src, disabledBorder = false, ...props }: Props = $props();

	const borderStatement: string = !disabledBorder
		? `border-1 border-neutral-800/60 bg-neutral-900/60`
		: '';
</script>

<div class="flex flex-col items-center justify-center gap-3">
	<div class={`image-wrapper flex flex-col justify-center ${borderStatement}`}>
		<img alt={name ? name : 'no-image-name-provided'} {src} class="cursor-pointer" />
	</div>
	<div>
		<Paragraph class="text-[16px] text-neutral-500">{description}</Paragraph>
	</div>
</div>

<style>
	.image-wrapper {
		aspect-ratio: 16 / 9;
		overflow: hidden;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
