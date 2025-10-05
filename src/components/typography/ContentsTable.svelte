<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, tick } from 'svelte';

	let ids: string[] = $state([]);

	onMount(async () => {
		await tick();
		ids = Array.from(document.querySelectorAll('[id]'))
			.map((el) => el.id)
			.filter((id) => id !== 'svelte-announcer'); // 👈 usuwamy announcer

		console.log(ids);
	});
</script>

<div class="sticky top-5 hidden flex-col p-1 pt-5 pl-10 select-none lg:flex">
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
