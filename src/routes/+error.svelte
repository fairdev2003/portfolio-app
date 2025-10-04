<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '../components/NotFound.svelte';
</script>

<div
	class="col-span-2 mx-auto h-2/3 w-full md:flex md:flex-col md:justify-center lg:grid lg:grid-cols-4"
>
	{#if page.status === 404}
		<div class="col-span-3 flex justify-center">
			<NotFound />
		</div>
	{/if}
</div>
