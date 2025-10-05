<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';
	import ContentsTable from '../../components/typography/ContentsTable.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	<ResponsiveContainer className="lg:grid lg:grid-cols-2">
		<div class="lg:col-span-3">
			{@render children()}
		</div>
	</ResponsiveContainer>
	<div class="sticky lg:col-span-1">
		<ContentsTable />
	</div>
</ResponsiveWrapper>

<svelte:head>
	<title>O mnie</title>
	<meta name="description" content="Informacje o mnie :)" />
</svelte:head>
