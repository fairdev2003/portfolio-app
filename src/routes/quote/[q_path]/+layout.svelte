<script lang="ts">
	import ResponsiveWrapper from '../../../components/ResponsiveWrapper.svelte'

	let { children } = $props();
</script>

<ResponsiveWrapper>
	{@render children()}
</ResponsiveWrapper>
