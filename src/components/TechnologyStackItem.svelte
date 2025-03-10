<script>
	let { src, stack_name, imageStyle = "" } = $props()
</script>

<div class="relative group hover:border-white cursor-pointer transition-colors flex justify-center items-center rounded-lg p-1 border-gray-500 border-2 h-15 w-15">




	<div class="absolute flex justify-center z-100 left-1/2 -translate-x-1/2 bottom-full mt-2 p-2 text-sm text-white bg-[#131333] rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
		{stack_name}
	</div>

	<img alt={stack_name} class={`h-10 w-10 ${imageStyle}`} src={`https://icon.icepanel.io/Technology/svg/${src}`}/>
</div>