<script>
	import Box from '../../components/Box.svelte';
	import TechnologyStack from './(components)/TechnologyStack.svelte';
	import Education from './(components)/Education.svelte';
	import Signature from "/src/assets/signature.png"
	import JobExperience from './(components)/JobExperience.svelte';
	import FileDownload from './(components)/FileDownload.svelte';
</script>

<div class="lg:col-span-2 flex flex-col gap-12 px-5">
	<h2>O mnie</h2>
	<Box>
		<div class="flex items-center gap-4">
			<h3 class="text-2xl font-bold whitespace-nowrap text-white">Moje 5 minut</h3>
			<div class="bg-gray-500 h-0.5 flex-1"></div>
		</div>
		<div class="flex flex-col my-3 gap-4">
			<p class="font-[500] text-gray-400">
				Witam cię, jestem
			</p>
			<img alt="signature" src={Signature} class="invert h-1/2 w-1/2 select-none"/>
			<p class="font-[500] text-gray-400">
				W pracy i prywatnie mowią mi Klimson. Od 2 lat hobbistycznie pasjonuje sie programowaniem. Do tej pory zrobiłem kilka naprawdę świetnych projektów, Moim głównym projektem na ten moment jest <a href="www.google.com">modopedia</a>. Moim celem jest pracować kiedyś w budowaniu stron internetowych zarówno wizualnie jak i w częsci serwerowej.
			</p>
			<p class="font-[500] text-gray-400">
				Przeprowadziłem się z mojego rodzinnego miasta do Krakowa, gdzie studiuje informatykę stosowaną, a pracuje w sprzedaży telefonicznej
			</p>
			<p class="font-[500] text-gray-400">
				Miłego dnia :)
			</p>
		</div>
	</Box>
	<TechnologyStack/>
	<Education/>
	<JobExperience/>
	<FileDownload/>
</div>