<script lang="ts">
	import type { Snippet } from "svelte";


	type Props = {
		className: string,
		children: Snippet
	}

	let { children, className = '' } = $props();
</script>

<div class={`box-tt flex flex-col gap-5 rounded-xl bg-[#131333] p-10 ${className}`}>
	{@render children()}
</div>

<style>
	.box {
		background-color: aliceblue;
	}
</style>
