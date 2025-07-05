<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children, data } = $props();
</script>

<ResponsiveWrapper>
	{@render children()}
	<ResponsiveContainer cols={1} className="p-5">
		<div>{data.routeName}</div>
	</ResponsiveContainer>
</ResponsiveWrapper>
