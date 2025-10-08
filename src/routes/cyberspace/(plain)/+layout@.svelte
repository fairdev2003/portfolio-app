<script lang="ts">
	let { children } = $props();
</script>

<section>
	<div>
		{@render children()}
	</div>
</section>
