<script>
	let { children, className = "" } = $props();
</script>

<div class={`bg-[#131333] flex flex-col gap-5 p-10 ${className}`}>
		{@render children()}
</div>
