<script lang="ts">
	let { children } = $props();
</script>

<div class="lg:grid grid-cols-3">
	{@render children()}
</div>
