<script lang="ts">
	import type { BlogNavigator } from '../../../types/blog.types';
	import SectorButton from './SectorButton.svelte';

	const { right, left }: BlogNavigator = $props();
</script>

<div class="flex justify-between">
	<SectorButton href={left.href}>
		{left.value}
	</SectorButton>
	<SectorButton href={right.href}>
		{right.value}
	</SectorButton>
</div>
