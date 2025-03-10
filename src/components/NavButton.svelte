<script>
	import { goto } from '$app/navigation';
	let { name, description, path } = $props()
</script>

<div class="nav flex gap-6 cursor-pointer" onclick={() => goto(path)}>
	<div class="nav-box w-0.5 bg-gray-700 transition-colors peer-hover:bg-blue-500"></div>
	<div class="flex flex-col h-15 justify-center">
		<h3 class="text-xl cursor-pointer">{name}</h3>
		<p class="text-gray-400 cursor-pointer text-sm">{description}</p>
	</div>
</div>

<style>
    .nav:hover {
        .nav-box {
            background-color: #ffffff;
        }
    }
</style>