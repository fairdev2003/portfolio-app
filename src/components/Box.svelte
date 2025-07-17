<script lang="ts">
	let { children, className = '' } = $props();
</script>

<div class={`flex flex-col gap-5 bg-[#131333] p-10 ${className}`}>
	{@render children()}
</div>

<style>
	.box {
		background-color: aliceblue;
	}
</style>
