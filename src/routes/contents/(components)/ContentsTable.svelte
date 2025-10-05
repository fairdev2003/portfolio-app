<script lang="ts">
	import { pageSections } from '$lib';
	import { pageContents } from '$lib/contents';
	import ContentLink from '../../../components/typography/ContentLink.svelte';

	type Props = {
		type?: 'section' | 'contents';
	};

	const { type = 'contents' }: Props = $props();
</script>

<div class="flex flex-col gap-3">
	{#if type == 'section'}
		{#each pageSections as content}
			{#if content.path != '/contents'}
				<ContentLink name={content.name} path={content.path} />
			{/if}
		{/each}
	{:else}
		{#each pageContents as content}
			<ContentLink name={content.name} path={content.path} />
		{/each}
	{/if}
</div>
