<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	<ResponsiveContainer>
		{@render children()}
	</ResponsiveContainer>
</ResponsiveWrapper>
