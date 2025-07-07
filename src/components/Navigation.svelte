<script>
	import NavButton from './NavButton.svelte';
	import { pageSections } from '$lib/static.js';
</script>

<div class="relative sticky top-10 hidden flex-col gap-6 p-1 select-none lg:flex">
	<div class="absolute -z-1 h-full w-0.5 bg-gray-700" />
	{#each pageSections as { name, description, path }}
		<NavButton {name} {description} {path} />
	{/each}
</div>
