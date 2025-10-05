<script>
	import { goto } from '$app/navigation';
	let { name, description, path } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="nav flex cursor-pointer gap-6" onclick={() => goto(path)}>
	<div class="nav-box w-0.5 bg-neutral-900 transition-colors peer-hover:bg-blue-500"></div>
	<div class="flex h-15 flex-col justify-center">
		<h3 class="cursor-pointer text-xl">{name}</h3>
		<p class="cursor-pointer text-sm text-gray-400">{description}</p>
	</div>
</div>

<style>
	.nav:hover {
		.nav-box {
			background-color: #ffffff;
		}
	}

	h3 {
		font-family: 'DM Serif Display', serif;
	}
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
