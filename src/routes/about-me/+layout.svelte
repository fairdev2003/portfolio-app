<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	<ResponsiveContainer className="grid-cols-2 lg:grid">
		{@render children()}
	</ResponsiveContainer>
</ResponsiveWrapper>
