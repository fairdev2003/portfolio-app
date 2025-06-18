<script lang="ts">
	import Box from './Box.svelte';
	import AnimatedLink from './AnimatedLink.svelte';

	import axios from 'axios'; // w przeglądarce pomiń ten import lub dodaj przez CDN
	import { onMount } from 'svelte';
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<div class="flex items-center gap-4">
		<h2>Strona Główna</h2>
		<div class="h-0.5 flex-1 bg-gray-500"></div>
	</div>

	<Box className="font-[500] text-gray-400 bg-[#131333] p-10 flex flex-col gap-3">
		<p>Miło mi Cię tu gościć.</p>
		<p>
			Serdeczne pozdrowienia dla Pana Krzysztofa. Dziękuję, że pozwolił mi Pan zrealizować ten
			projekt w wybranym frameworku. Zdecydowałem się na <span class="text-orange-500">Svelte</span>
		</p>
		<p>Miłego przeglądania! :)</p>
		<AnimatedLink text="O mnie" href="/about-me" />
	</Box>
	<h1 class="flex justify-center text-center">Strona jest w trakcie remontu :D</h1>
</div>
