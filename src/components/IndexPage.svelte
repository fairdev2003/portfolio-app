<script lang="ts">
	import Box from './Box.svelte';
	import AnimatedLink from './AnimatedLink.svelte';

	import CurrentPlayingMusic from './CurrentPlayingMusic.svelte';
	import Heading from './Heading.svelte';
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<Heading value="Strona Główna" />

	<Box className="font-[500] text-gray-400 bg-[#131333] p-10 flex flex-col gap-3">
		<p>Miło mi Cię tu gościć.</p>
		<p>
			Serdeczne pozdrowienia dla Pana Krzysztofa. Dziękuję, że pozwolił mi Pan zrealizować ten
			projekt w wybranym frameworku. Zdecydowałem się na <span class="text-orange-500">Svelte</span>
		</p>
		<p>Miłego przeglądania! :)</p>
		<AnimatedLink text="O mnie" href="/about-me" />
	</Box>

	<div class="flex flex-col gap-5">
		<CurrentPlayingMusic />
	</div>
</div>
