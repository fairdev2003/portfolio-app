<script lang="ts">
	let { children } = $props()

</script>

<div class="flex items-center gap-4">
	<h2>
		{@render children()}
	</h2>
	<div class="bg-gray-500 h-0.5 flex-1"></div>
</div>
