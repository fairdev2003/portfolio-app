<script lang="ts">
	import { onMount } from 'svelte';
	import Heading from '../../components/typography/Heading.svelte';
	import axios from 'axios';

	let list: { files: string[] } = $state({ files: [] });

	onMount(async () => {
		const response = await axios.get('http://robert248.mikrus.xyz:30248/list/kongo/zoo');
		list = response.data;
		console.log(list.files);
	});
</script>

<div class="col-span-2 flex flex-col gap-5">
	<Heading idTrackingDisabled>Kongo Zoo</Heading>
	{#if list.files.length > 0}
		{#each list.files as item}
			<img
				src={`http://robert248.mikrus.xyz:30248/interface/bucket/kongo/zoo/${item}`}
				alt="Kongo Zoo Image"
			/>
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
