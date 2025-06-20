<script lang="ts">
	let { children, className = '' } = $props();
</script>

<div class={`flex h-25 items-center gap-4 rounded-2xl bg-[#131333] px-5 py-2 ${className}`}>
	{@render children()}
</div>
