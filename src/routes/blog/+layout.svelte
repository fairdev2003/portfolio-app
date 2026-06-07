<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';
	import SideBlogBar from './(components)/SideBlogBar.svelte';

	let { children, data } = $props();
</script>

<ResponsiveWrapper>
	<ResponsiveContainer cols={2} className="col-span-2 flex flex-col gap-2">
		{@render children()}
	</ResponsiveContainer>
</ResponsiveWrapper>
