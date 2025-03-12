<script>

import NavButton from './NavButton.svelte';
import { pageSections } from '$lib/static.js';
</script>

<div class="lg:flex hidden flex-col gap-6 relative p-1 sticky top-10">
  <div class="absolute -z-1 w-0.5 h-full bg-gray-700"/>
	{#each pageSections as { name, description, path }}
		<NavButton {name} {description} {path} />
	{/each}
</div>


