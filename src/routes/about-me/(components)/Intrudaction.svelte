<script>
	import Box from '../../../components/Box.svelte';
	import Signature from '/src/assets/signature.png';
</script>

<h2>O mnie</h2>
<Box>
	<div class="flex items-center gap-4">
		<h3 class="text-2xl font-bold whitespace-nowrap text-white">Moje 5 minut</h3>
		<div class="h-0.5 flex-1 bg-gray-500"></div>
	</div>
	<div class="my-3 flex flex-col gap-4">
		<p class="font-[500] text-gray-400">Witam cię, jestem</p>
		<img alt="signature" src={Signature} class="h-1/2 w-1/2 invert select-none" />
		<p class="font-[500] text-gray-400">
			W pracy i prywatnie mowią mi Klimson. Od 2 lat hobbistycznie pasjonuje sie programowaniem. Do
			tej pory zrobiłem kilka naprawdę świetnych projektów, Moim głównym projektem na ten moment
			jest <a href="www.google.com">modopedia</a>. Moim celem jest pracować kiedyś w budowaniu stron
			internetowych zarówno wizualnie jak i w częsci serwerowej.
		</p>
		<p class="font-[500] text-gray-400">
			Przeprowadziłem się z mojego rodzinnego miasta do Krakowa, gdzie studiuje informatykę
			stosowaną, a pracuje w sprzedaży telefonicznej
		</p>
		<p class="font-[500] text-gray-400">Miłego dnia :)</p>
	</div>
</Box>
