<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		name?: string;
		description?: string;
		src?: string;
	} & HTMLAttributes<HTMLImageElement>;

	const { name, description, src, ...props }: Props = $props();
</script>

<div class="image-wrapper flex justify-center border-1 border-neutral-800/60 bg-neutral-900/60">
	<img alt={name ? name : 'no-image-name-provided'} {src} />
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
