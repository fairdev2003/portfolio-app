<script lang="ts">
	import ResponsiveWrapper from '../../../components/ResponsiveWrapper.svelte';

	let { children } = $props();
</script>

{@render children()}
