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
	<Heading>i use arch btw.</Heading>
	<div class="mx-auto mt-10 flex">
		<Paragraph>{'Tu nic nie ma :<'}</Paragraph>
	</div>
	<div class="jus flex">
		<Image src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1721836744/gallery/Art6.png" />
	</div>
</div>
