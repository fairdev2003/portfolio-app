<script lang="ts">
	import { onMount } from 'svelte';
	import Heading from '../../components/typography/Heading.svelte';
	import axios from 'axios';
	import { api } from '$lib/api/api';

	let list: { files: string[] } = $state({ files: [] });

	onMount(async () => {
		const response = await api.api.get('list/kongo/zoo');
		list = response.data;

		console.log(list.files);
	});
</script>

<div class="col-span-2 flex flex-col gap-5">
	<Heading idTrackingDisabled>Kongo Zoo</Heading>
	{#if list.files.length > 0}
		{#each list.files as item}
			<img
				src={`https://api.klimson.dev/interface/bucket/kongo/zoo/${item}`}
				alt="Kongo Zoo Image"
			/>
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
