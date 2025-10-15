<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Paragraph from '../typography/Paragraph.svelte';

	type Props = {
		children: Snippet;
		white?: boolean;
	} & HTMLAttributes<HTMLParagraphElement>;

	const { white = false, children, ...props }: Props = $props();
</script>

<div class="flex gap-3 text-white" {...props}>
	<div class="mx-4 w-0.5 self-stretch rounded-full bg-neutral-500" />
	<div>
		<h3>Contactsales</h3>
	</div>
</div>

<style>
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-weight: 500;
	}
</style>
