<script lang="ts">
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';
	import ContentsTable from '../../components/typography/ContentsTable.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	{@render children()}
	<div class="sticky lg:col-span-1">
		<ContentsTable />
	</div>
</ResponsiveWrapper>
