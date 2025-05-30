<script>
	let { children, className = "" } = $props();
</script>

<div class={`border-3 border-gray-600 flex flex-col gap-5 mt-5 p-5 ${className}`}>
	{@render children()}
</div>