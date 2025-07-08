<script lang="ts">
	import { goto } from '$app/navigation';

	type Props = {
		name: string;
		path: string;
		selected?: boolean;
	};

	let { name, path, selected = false }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="nav flex cursor-pointer" onclick={() => goto(path)}>
	<div class="flex w-full flex-col justify-center">
		{#if selected}
			<p class="selected-text cursor-pointer text-sm font-bold">{name}</p>
		{:else}
			<p class="cursor-pointer text-sm">{name}</p>
		{/if}
	</div>
	<div class={`nav-box w-0.5 bg-gray-700 transition-colors peer-hover:bg-blue-500`}></div>
</div>

<style>
	.nav:hover {
		.nav-box {
			background-color: #ffffff;
		}
	}
	.selected {
		.nav-box {
			background-color: #ce9178;
		}
	}
</style>
