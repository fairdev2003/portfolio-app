<script lang="ts">
	import { Dot } from 'lucide-svelte';

	type Pages = {
		name: string;
		route: string;
	};

	type Props = {
		pages?: Pages[];
	};

	const testTable: Pages[] = [
		{ name: 'KLIMSON', route: '/' },
		{ name: 'ABOUT-ME', route: '/about-me' }
	];
	const { pages = testTable }: Props = $props();
</script>

<div class="my-3 flex items-center">
	{#each pages as { name, route }, i}
		<p class="text-sm text-neutral-500">{name}</p>
		{#if i != pages.length - 1}
			<Dot color="gray"></Dot>
		{/if}
	{/each}
</div>
