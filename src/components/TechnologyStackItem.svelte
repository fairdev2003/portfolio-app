<script>
	let { src, stack_name, imageStyle = '', href } = $props();
</script>

<div
	class="group relative flex h-15 w-15 cursor-pointer items-center justify-center rounded-lg border-2 border-neutral-500 p-1 transition-colors hover:border-white"
>
	<div
		class="absolute bottom-full left-1/2 z-100 mt-2 hidden -translate-x-1/2 justify-center rounded-lg bg-neutral-900 p-2 text-sm text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:flex group-hover:opacity-100"
	>
		{stack_name}
	</div>
	<a {href} target="_blank">
		<img
			alt={stack_name}
			class={`h-10 w-10 ${imageStyle}`}
			src={`https://icon.icepanel.io/Technology/svg/${src}`}
		/>
	</a>
</div>

<style>
	a {
		background-color: transparent !important;
	}
</style>
