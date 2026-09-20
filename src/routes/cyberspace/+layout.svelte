<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import gsap from 'gsap';
	import './cyberspace.css';

	let { children } = $props();

	function descriptionAnimation(): Attachment {
		return (element: Element) => {
			gsap.fromTo(element, { scale: 0 }, { scale: 1, rotate: 360, delay: 0.5 });
		};
	}
</script>

<section class="relative h-screen text-start w-full bg-black">
	<div
		class="relative container mx-auto flex h-full w-full items-center justify-center md:border-1 lg:border-1"
	>
		{@render children()}
	</div>
</section>

<style>
	.container {
		background-image: url('https://anlucas.neocities.org/starsbg.gif');
		width: full;
	}
</style>
