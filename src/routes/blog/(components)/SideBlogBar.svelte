<script lang="ts">
	import { sfmBlogRoutes } from '../static';
	import BlogNavButton from './BlogNavButton.svelte';

	type Props = {
		route: string;
	};
	const { route }: Props = $props();
</script>

<div class="relative sticky top-10 hidden flex-col gap-1 p-1 select-none lg:flex">
	<h3 class="relative sticky top-10">📃 Spis tresci</h3>
	{#each sfmBlogRoutes as { name, path }}
		<BlogNavButton {name} {path} selected={path === route} />
	{/each}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<div class="absolute right-1 -z-1 h-full w-0.5 bg-gray-700" />
</div>
