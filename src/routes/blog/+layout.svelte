<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';
	import SideBlogBar from './(components)/SideBlogBar.svelte';

	let { children, data } = $props();
</script>

<ResponsiveWrapper>
	{@render children()}
	<ResponsiveContainer cols={1} className="p-5 col-span-1 flex flex-col gap-2">
		<SideBlogBar route={data.route} />
	</ResponsiveContainer>
</ResponsiveWrapper>
