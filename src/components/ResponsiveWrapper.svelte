<script lang="ts">
	let { children } = $props();
</script>

<div class="grid-cols-3 lg:grid">
	{@render children()}
</div>
