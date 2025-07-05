<script>
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	let { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3">
	<div class="flex flex-col gap-2">
		{#each data.sfmFiles as sfmFile}
			<p class="text-white">{sfmFile}</p>
		{/each}
	</div>
</ResponsiveContainer>
