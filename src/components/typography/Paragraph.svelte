<script lang="ts">
	import '../../assets/georgia-2-webfont/style.css';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
		white?: boolean;
	} & HTMLAttributes<HTMLParagraphElement>;

	const { white = false, children, ...props }: Props = $props();
</script>

<p
	class={`heading text-md text-[17px] text-black ${white ? 'text-white' : ' dark:text-neutral-400'}  lg:text-[18px]`}
	{...props}
>
	{@render children()}
</p>

<style>
	p {
		font-family: 'Georgia', serif;
	}
</style>
