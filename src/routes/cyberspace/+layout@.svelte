<script lang="ts">
	let { children } = $props();
</script>

<section>
	<div class="h-[100vh] w-full bg-cyan-800">
		{@render children()}
	</div>
</section>
