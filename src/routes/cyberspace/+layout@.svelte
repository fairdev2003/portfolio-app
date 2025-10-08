<script lang="ts">
	let { children } = $props();
</script>

<section>
	<div class="h-[100vh] w-full bg-blue-700">
		{@render children()}
	</div>
</section>
