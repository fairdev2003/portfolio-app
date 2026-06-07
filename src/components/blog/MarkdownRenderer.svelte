<script lang="ts">
	import { api } from '$lib/api/api';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	type Props = {
		markdown: string;
	};

	let { markdown }: Props = $props();

	let markdownText: string = $state('');
	let markdownHTML: string = $state('');

	onMount(async () => {
		const response = await api.api.get(markdown);

		markdownText = response.data;
		markdownHTML = await marked.parse(markdownText);
	});
</script>

<article class="prose prose-invert prose-headings:font-bold prose-a:text-blue-400 max-w-none">
	{@html markdownHTML}
</article>

<style>
</style>
