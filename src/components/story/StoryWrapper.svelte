<script lang="ts">
	import Heading from '../typography/Heading.svelte';
	import type { Timeline } from './story.types';
	import StoryComponent from './StoryComponent.svelte';

	const temp_stories: Timeline = [
		{
			name: '☀️',
			created_at: new Date('01-05-2026'),
			stories: [
				{
					created_at: new Date('05-01-2026 16:05'),
					name: 'Cypis',
					media: 'https://api.klimson.dev/storage/interface/kongo/trip/cypis.jpg'
				},
				{
					created_at: new Date('05-01-2026 16:37'),
					name: 'Wyspa Epsteina themed koc',
					media: 'https://api.klimson.dev/storage/interface/kongo/trip/epstein_jew.jpg'
				},
				{
					created_at: new Date('05-01-2026 16:38'),
					name: 'Nudny spokojny widok dla spragnionej duszy',
					media: 'https://api.klimson.dev/storage/interface/kongo/trip/widok-1.jpg'
				},
				{
					created_at: new Date('05-01-2026 17:11'),
					name: 'Kolejny nudny widok z niestabilnymi dziewczynami psychicznie w tle',
					media: 'https://api.klimson.dev/storage/interface/kongo/trip/widok-2.jpg'
				},
				{
					created_at: new Date('05-02-2026 01:22'),
					name: 'Wloch farmi aure',
					media: 'https://api.klimson.dev/storage/interface/kongo/trip/wloch.jpg'
				}
			]
		}
	];
</script>

<div class="flex flex-col gap-5">
	<Heading>Wspomnienia</Heading>
	<div class="flex gap-2">
		{#each temp_stories as story_group}
			<StoryComponent
				created_at={story_group.created_at}
				name={story_group.name}
				stories={story_group.stories}
			/>
		{/each}
	</div>
</div>
