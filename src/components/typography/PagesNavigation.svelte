<script lang="ts">
	import { Dot } from 'lucide-svelte';
	import Paragraph from './Paragraph.svelte';

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
		<a class="cursor-pointer" href={route}>{name}</a>
		{#if i != pages.length - 1}
			<Dot color="gray"></Dot>
		{/if}
	{/each}
</div>

<style>
	a {
		color: #737373;
		font-size: 14px;
	}
</style>
