<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	<ResponsiveContainer cols={2}>
		{@render children()}
	</ResponsiveContainer>
</ResponsiveWrapper>

<svelte:head>
	<title>Muzyka</title>
	<meta name="description" content="Muzyka to moja pasja" />
</svelte:head>
