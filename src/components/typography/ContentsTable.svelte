<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let ids: string[];

	onMount(() => {
		ids = Array.from(document.querySelectorAll('[id]')).map((el) => el.id);
		ids = ids.slice(0, ids.length - 1);
		console.log(ids);
	});
</script>

<div class="sticky top-5 flex-col p-1 pt-10 pl-10 select-none">
	<h3 class="heading">Spis treści</h3>
	<div class="mt-2 flex flex-col">
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		{#each ids as id}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<p
				class="link flex cursor-pointer text-white/80 hover:underline"
				onclick={() => {
					const url = location.origin + location.pathname + '#' + id;
					goto(url);
				}}
			>
				{id.replaceAll('-', ' ')}
			</p>
		{/each}
	</div>
</div>

<style>
	.heading {
		font-family: 'DM Serif Display', serif;
		font-size: 20px;
	}

	.link {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
