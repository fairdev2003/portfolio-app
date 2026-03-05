<script lang="ts">
	import { api } from '$lib/api/api';
	import Gallery from '../../components/gallery/Gallery.svelte';
	import GalleryGroup from '../../components/gallery/GalleryGroup.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import type { ImageListItem } from '../../types/storage.types';

	const kongoZooItems: ImageListItem[] = [
		{
			name: 'Iphone XR',
			description: 'Kolega sprawdza jak bardzo dobry jest Iphone XR!',
			url: 'https://api.klimson.dev/storage/file/kongo/zoo/xr.jpg'
		},
		{
			name: 'Kasztelanik i bacardi',
			description: 'Wizualizacja menelni, którą stworzyliśmy',
			url: 'https://api.klimson.dev/storage/file/kongo/zoo/kasztelan.jpg'
		},
		{
			name: 'Oooo',
			description: 'My na tle Wawelu',
			url: 'https://api.klimson.dev/storage/file/kongo/zoo/ooo.jpg'
		}
	];

	const roblox: ImageListItem[] = [
		{
			name: 'Nie slychac was wogole',
			description: 'Kolega sprawdza jak bardzo dobry jest Iphone XR!',
			url: 'https://api.klimson.dev/storage/file/roblox/image-9.png'
		},
		{
			name: 'Nie slychac was wogole',
			description: 'Kolega sprawdza jak bardzo dobry jest Iphone XR!',
			url: 'https://api.klimson.dev/storage/file/roblox/image-8.png'
		},
		{
			name: 'Nie slychac was wogole',
			description: 'Kolega sprawdza jak bardzo dobry jest Iphone XR!',
			url: 'https://api.klimson.dev/storage/file/roblox/image-7.png'
		},
		{
			name: 'Nie slychac was wogole',
			description: 'Kolega sprawdza jak bardzo dobry jest Iphone XR!',
			url: 'https://api.klimson.dev/storage/file/roblox/image-5.png'
		},
		{
			name: 'Hej menadżer',
			description: 'Kolega zaparkował swój samochud',
			url: 'https://api.klimson.dev/storage/file/roblox/image-10.png'
		}
	];
</script>

<div class="col-span-2 flex flex-col gap-y-5">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'GALERIA', route: '/gallery' }
		]}
	/>
	<Heading>Galeria.</Heading>
	<GalleryGroup
		heading="Ekipa Kongo!!"
		description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eum dolores libero asperiores aliquam numquam voluptatem consequatur consequuntur, voluptas explicabo rerum reiciendis aperiam nemo! Dolorum voluptatibus enim quam at aut.
"
		imageList={kongoZooItems}
	/>
	<GalleryGroup
		heading="Roblox"
		description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eum dolores libero asperiores aliquam numquam voluptatem consequatur consequuntur, voluptas explicabo rerum reiciendis aperiam nemo! Dolorum voluptatibus enim quam at aut."
		imageList={roblox}
	/>
</div>
