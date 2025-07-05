<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	{@render children()}
	<ResponsiveContainer cols={1} className="p-5">
		<div>Blog Table Content</div>
	</ResponsiveContainer>
</ResponsiveWrapper>
