<script>
	import Box from '../../../components/Document.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import Paragraph from '../../../components/typography/Paragraph.svelte';

	import Signature from '/src/assets/signature.png';
</script>

<div class="mb-5">
	<Heading padding class="mb-5" id="O-Mnie">O mnie</Heading>

	<Box className="relative">
		<div class="my-3 flex flex-col gap-4">
			<Paragraph class="font-[500] text-gray-400">Witam cię, jestem</Paragraph>
			<img alt="signature" src={Signature} class="h-2/5 w-2/5 invert select-none" />
			<Paragraph class="font-[500] text-gray-400">
				W pracy i prywatnie mowią mi Klimson. Od 2 lat hobbistycznie pasjonuje sie programowaniem.
				Do tej pory zrobiłem kilka naprawdę świetnych projektów, Moim głównym projektem na ten
				moment jest <a href="/projects?openProject=portfolio">moje portfolio</a>. Moim celem jest
				pracować kiedyś w budowaniu stron internetowych zarówno wizualnie jak i w częsci serwerowej.
			</Paragraph>
			<Paragraph class="font-[500] text-gray-400">
				Przeprowadziłem się z mojego rodzinnego miasta do Krakowa, gdzie studiuje informatykę
				stosowaną, a pracuje w sprzedaży telefonicznej
			</Paragraph>
			<Paragraph class="font-[500] text-gray-400">Miłego dnia :)</Paragraph>
		</div>
	</Box>
</div>
