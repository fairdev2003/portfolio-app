<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const items = ['Start', 'Info', 'Opcje', 'Podsumowanie'];
	let activeIndex = 0;

	let container: HTMLDivElement;
	let indicator: HTMLDivElement;

	function setActive(index: number, el: HTMLDivElement) {
		activeIndex = index;

		const rect = el.getBoundingClientRect();
		const parentRect = container.getBoundingClientRect();

		const x = rect.left - parentRect.left;
		const width = el.offsetWidth;

		gsap.to(indicator, { duration: 0.3, x, width, ease: 'power2.out' });
	}

	onMount(() => {
		const first = container.querySelector('div') as HTMLDivElement;
		if (first) setActive(0, first);
	});
</script>

<div bind:this={container} class="relative flex gap-4">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	{#each items as item, i}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="cursor-pointer py-2 text-sm font-medium text-neutral-400 hover:text-white"
			class:!text-white={i === activeIndex}
			on:click={(e) => setActive(i, e.currentTarget as HTMLDivElement)}
		>
			{item}
		</div>
	{/each}

	<div
		bind:this={indicator}
		class="absolute bottom-0 h-[2px] bg-white"
		style="width:0; transform:translateX(0px);"
	></div>
</div>
