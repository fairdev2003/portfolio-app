<script lang="ts">
	import Heading from '../typography/Heading.svelte';

	type HeaderProps = {
		title: string;
		author: string;
		publishDate: Date;
		readingTime?: number;
		tags?: string[];
		authorImageUrl?: string;
	};

	let {
		title,
		author,
		publishDate,
		readingTime = 5,
		tags = [],
		authorImageUrl
	}: HeaderProps = $props();

	let formattedDate = $derived(
		new Intl.DateTimeFormat('pl-PL', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(publishDate)
	);
</script>

<header class="blog-header mb-5 border-b border-zinc-800 pb-8">
	{#if tags.length > 0}
		<div class="mb-4 flex gap-2">
			{#each tags as tag}
				<span
					class="rounded bg-zinc-800 px-2 py-1 font-mono text-xs tracking-wider text-white uppercase"
				>
					# {tag}
				</span>
			{/each}
		</div>
	{/if}

	<Heading idTrackingDisabled class="mb-5">{title}</Heading>

	<div class="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-400">
		<div class="flex items-center gap-2">
			{#if authorImageUrl}
				<img src={authorImageUrl} alt={author} class="h-8 w-8 rounded-full object-cover" />
			{:else}
				<div
					class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-zinc-100"
				>
					{author.charAt(0)}
				</div>
			{/if}
			<span>{author}</span>
		</div>

		<div class="flex items-center gap-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line
					x1="16"
					y1="2"
					x2="16"
					y2="6"
				></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"
				></line></svg
			>
			<time datetime={publishDate.toISOString()}>{formattedDate}</time>
		</div>

		<div class="flex items-center gap-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"
				></polyline></svg
			>
			<span>{readingTime} min czytania</span>
		</div>
	</div>
</header>

<style>
	.blog-header {
		/* Możesz dodać specyficzne fonty, np. Inter lub JetBrains Mono dla technicznego vibe'u */
		font-family: ui-sans-serif, system-ui, sans-serif;
	}
</style>
