<script lang="ts">
	import ResponsiveWrapper from '../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

<ResponsiveWrapper>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	{@render children()}
</ResponsiveWrapper>
