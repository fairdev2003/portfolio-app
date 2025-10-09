<script lang="ts">
	let { children } = $props();
</script>

<section>
	<div class="flex h-[100vh] w-full justify-center bg-cyan-800">
		{@render children()}
	</div>
</section>
