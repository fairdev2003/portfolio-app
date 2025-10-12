<script lang="ts">
	import axios from 'axios';
	import type { GitHubCommit } from './github.types';
	import Paragraph from '../../../../../components/typography/Paragraph.svelte';
	import { GitCommitHorizontal, ArrowRight } from 'lucide-svelte';

	type Props = {
		repo: string;
		author: string;
	};

	const { repo, author }: Props = $props();

	let commitsPromise: Promise<GitHubCommit[]> = fetchCommits();

	async function fetchCommits(): Promise<GitHubCommit[]> {
		// 2-sekundowy delay
		await new Promise((resolve) => setTimeout(resolve, 2000));

		const baseLink = `https://api.github.com/repos/${author}/${repo}/commits`;
		const response = await axios.get<GitHubCommit[]>(baseLink);
		return response.data;
	}
</script>

{#await commitsPromise}
	<div class="relative h-9 w-full overflow-hidden rounded bg-neutral-800/60">
		<div
			class="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent"
		></div>
	</div>
{:then commits}
	{#if commits.length > 0}
		<div
			class="flex h-18 items-center justify-between gap-1 border border-t-0 border-neutral-800/60 bg-neutral-900/60 p-3 px-5"
		>
			<div class="flex flex-col gap-1">
				<span class="flex items-center gap-1 text-[12px] font-bold text-neutral-400">
					<GitCommitHorizontal />
					<p>OSTATNI COMMIT</p>
					<p>({new Date(commits[0].commit.author.date).toLocaleString('pl-PL')})</p>
				</span>
				<p class="text-[14px]">{commits[0].commit.message}</p>
			</div>
			<a
				href={commits[0].html_url}
				target="_blank"
				class="cursor-pointer rounded-full p-3 text-neutral-400 transition-colors hover:bg-neutral-800/30 hover:text-green-500"
			>
				<ArrowRight />
			</a>
		</div>
	{:else}
		<p class="p-4 text-neutral-500">Brak commitów.</p>
	{/if}
{:catch err}
	<p class="p-4 text-red-500">❌ Błąd podczas pobierania commitów: {err.message}</p>
{/await}

<style>
	a:hover {
		color: white;
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
	.animate-shimmer {
		animation: shimmer 1.5s infinite;
	}
</style>
