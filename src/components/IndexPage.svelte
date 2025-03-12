<script lang="ts">
import Box from './Box.svelte';
import { onMount } from "svelte";
import { gsap } from "gsap";
let box : HTMLElement | null = null;
onMount(() => {
	gsap.set(box, { x: 0 });
});

function onHover() {
	gsap.to(box, { x: 10, duration: 0.3, ease: "power2.out" }); // Moves right on hover
}

function onLeave() {
	gsap.to(box, { x: 0, duration: 0.3, ease: "power2.out" }); // Moves back on leave
}
</script>

<div class="lg:col-span-2 flex flex-col gap-6">

	<div class="flex items-center gap-4">
		<h2>Strona Główna</h2>
		<div class="bg-gray-500 h-0.5 flex-1"></div>
	</div>

	<Box className="font-[500] text-gray-400 bg-[#131333] p-10 flex flex-col gap-3">
		<p>Miło mi Cię tu gościć.</p>
		<p>Serdeczne pozdrowienia dla Pana Krzysztofa. Dziękuję, że pozwolił mi Pan zrealizować ten projekt w wybranym frameworku. Zdecydowałem się na <span class="text-orange-500">Svelte</span></p>
		<p>Miłego przeglądania! :)</p>
		<div class="flex justify-end">
			<a bind:this={box} class="text-white flex gap-2 items-center" href="/about-me" on:mouseleave={onLeave} on:mouseenter={onHover}>
				<p>O mnie</p>
				<img alt="arrow-right" class="w-5 h-5" src="https://img.icons8.com/?size=100&id=60&format=png&color=FFFFFF"/>
			</a>
			<div class="">

			</div>
		</div>
	</Box>

</div>

<style>
	a {
			text-decoration: none;
			color: white;
	}
</style>