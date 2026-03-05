<script lang="ts">
	import { onMount } from 'svelte';
	import SpotifyStatus from './SpotifyStatus.svelte';
	import Caret from './typography/Caret.svelte';
	import Paragraph from './typography/Paragraph.svelte';
	import { api } from '$lib/api/api';
	import { dev } from '$app/environment';

	let entries: number = $state(0);

	onMount(async () => {
		if (!dev) {
			const patchResponse = await api.api.patch('/klimson/entries');
		}
		const response = await api.api.get('/klimson/entries');
		entries = response.data.entries;
	});
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<div>
		<Caret />
		<SpotifyStatus />
	</div>
	<Paragraph>Wejscia na stronke: {entries}</Paragraph>
</div>
