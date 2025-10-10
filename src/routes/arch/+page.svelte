<script lang="ts">
	import Box from '../../components/Document.svelte';
	import Image from '../../components/gallery/Image.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
</script>

<div class="gap col-span-2 flex flex-col">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'I USE ARCH BTW', route: '/arch' }
		]}
	/>
	<div class="mb-5 flex flex-col gap-5">
		<Heading padding id="Arch">i use arch btw.</Heading>
		<Paragraph
			>Z linuxem akurat mam styczność od dość niedawna, ponieważ często mimo chęci bałem sie ze przy
			instalacji coś sie stanie. Ale pewnego dnia dość impulsywnie stwierdziłem że warto spróbować.
			Z uwagi na to ze miałem drugi dysk SATA po prostu nie oddziałowując na windowsa na głownym
			dysku zainstalowałem Zorin OS (bazowany na Ubuntu). Po jakimś czasie zaczęło mi brakować i sam
			system szczerze nie spełeniał moich oczekiwań i w dalszym ciągu dysk M2 byl nie używany bo
			dalej miał Windowsa 10. Po wielokrotnych namowach moich ziomków linuksiarzy zdecydowałem sie
			na Archa. Jestem mega zadowolony. Archa mam zarówno na laptopie jak i komputerze głównym 😁
		</Paragraph>
	</div>
	<div class="flex flex-col gap-4">
		<Image
			disabledBorder
			description="Widok Hyprlanda z otwartym Spotify."
			src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1759771829/portfolio/download.jpg"
		/>
		<Image
			disabledBorder
			description="CodeOS (Visual Studio Code) na hyprlandzie."
			src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1760102447/portfolio/1cde273e-1579-4345-8c0c-19ed991bfab2.png"
		/>
	</div>
</div>

<svelte:head>
	<title>i use arch btw.</title>
	<meta name="description" content="Strona o mojej przychodzie z linuxem" />
</svelte:head>
