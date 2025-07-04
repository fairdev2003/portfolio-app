<script lang="ts">
	import NavigationSectors from '../../components/NavigationSectors.svelte';

	let { children } = $props();
</script>


<div class="lg:grid grid-cols-3">
	
	{@render children()}
</div>
