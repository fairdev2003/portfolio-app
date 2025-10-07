<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Paragraph from '../typography/Paragraph.svelte';

	type Props = {
		name?: string;
		description?: string;
		src?: string;
		disabledBorder?: boolean;
		galleryMode?: boolean;
	} & HTMLAttributes<HTMLDivElement>;

	const {
		name,
		description,
		src,
		disabledBorder = false,
		galleryMode = false,
		...props
	}: Props = $props();

	const borderStatement: string = !disabledBorder
		? `border border-neutral-800/60 bg-neutral-900/60`
		: '';

	const imgClasses = galleryMode
		? ' object-cover w-full h-full cursor-pointer'
		: ' object-contain w-full h-full cursor-pointer';
</script>

<div {...props} class="flex flex-col items-center justify-center gap-3">
	<div class={`image-wrapper w-full ${borderStatement} overflow-hidden rounded-lg`}>
		<img alt={name ? name : 'no-image-name-provided'} {src} class={imgClasses} />
	</div>
	{#if description}
		<div>
			<Paragraph class="text-[16px] text-neutral-500">{description}</Paragraph>
		</div>
	{/if}
</div>
