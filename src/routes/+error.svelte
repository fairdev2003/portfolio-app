<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '../components/NotFound.svelte';
</script>

<div class="lg:grid mx-auto lg:grid-cols-4 md:flex md:flex-col md:justify-center w-full h-2/3">

	{#if page.status === 404}
		<div class="flex justify-center col-span-3 ">
			<NotFound/>
		</div>

	{/if}
</div>