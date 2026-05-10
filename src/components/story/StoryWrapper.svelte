<script lang="ts">
	import Heading from '../typography/Heading.svelte';
	import type { Story, Timeline } from './story.types';
	import StoryComponent from './StoryComponent.svelte';

	const may_day = [
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
	];

	const bacardi = [
		{
			created_at: new Date('05.04.2026 10:35'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/bacardi/bacardi_1.png',
			name: '"Tylko by żarła i rozpierdalała kocyk"'
		},
		{
			created_at: new Date('05.04.2026 10:35'),
			media: 'https://api.klimson.dev/storage/interface/kongo/bacardi/baca_1.jpg',
			name: 'Bacardi'
		}
	];

	const blackout_age = [
		{
			created_at: new Date('05.04.2026 10:35'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/bacardi/bacardi_1.png',
			name: '"Tylko by żarła i rozpierdalała kocyk"'
		},
		{
			created_at: new Date('05.04.2026 10:35'),
			media: 'https://api.klimson.dev/storage/interface/kongo/bacardi/baca_1.jpg',
			name: 'Bacardi'
		}
	];

	const italy_convoy: Story[] = [
		{
			created_at: new Date('05.07.2026 15:16'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/1.jpg',
			name: '',
			music: {
				name: 'Party All The Time',
				author: 'Eddie Murphy',
				src: 'https://api.deezer.com/track/5404532'
			}
		},
		{
			created_at: new Date('05.07.2026 15:17'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/2.jpg',
			name: ''
		},
		{
			created_at: new Date('05.07.2026 15:19'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/3.jpg',
			name: ''
		},
		{
			created_at: new Date('05.07.2026 15:22'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/4.jpg',
			name: ''
		},
		{
			created_at: new Date('05.07.2026 15:40'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/5.jpg',
			name: ''
		},
		{
			created_at: new Date('05.07.2026 16:47'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/6.jpg',
			name: ''
		},
		{
			created_at: new Date('05.07.2026 16:51'),
			media: 'https://api.klimson.dev/interface/bucket/kongo/italy/7.jpg',
			name: ''
		}
	];

	const temp_stories: Timeline = [
		{
			name: '☀️',
			created_at: new Date('01-05-2026'),
			stories: may_day
		},
		{
			name: 'border',
			created_at: new Date('05.04.2026 15:29'),
			stories: bacardi
		},
		{
			name: '🇮🇹',
			created_at: new Date('05.04.2026 15:29'),
			stories: italy_convoy
		},
		{
			name: 'blkt',
			created_at: new Date('05.04.2026 15:29'),
			stories: blackout_age
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
	<audio
		controls
		src="https://cdnt-preview.dzcdn.net/api/1/1/b/8/a/0/b8a60b93e1755f2501f97bc30d6dc176.mp3?hdnea=exp=1778417929~acl=/api/1/1/b/8/a/0/b8a60b93e1755f2501f97bc30d6dc176.mp3*~data=user_id=0,application_id=42~hmac=8c50c2d70ad829384f5d9efa39b7580bc50b00d87cd530c311be0ab019adeb69"
	></audio>
</div>
