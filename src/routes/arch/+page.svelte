<script lang="ts">
	import Box from '../../components/Document.svelte';
	import Image from '../../components/gallery/Image.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
</script>

<div class="col-span-2 flex flex-col gap-y-5">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'I USE ARCH BTW', route: '/arch' }
		]}
	/>
	<Heading id="Arch">i use arch btw.</Heading>
	<div class="mt-5">
		<Image
			disabledBorder
			description="Widok Hyprlanda z otwartym Spotify."
			src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1759771829/portfolio/download.jpg"
		/>
	</div>
</div>

<svelte:head>
	<title>i use arch btw.</title>
	<meta name="description" content="Strona o mojej przychodzie z linuxem" />
</svelte:head>
