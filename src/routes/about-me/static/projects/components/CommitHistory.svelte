<script lang="ts">
	import axios, { type AxiosResponse } from 'axios';
	import { onMount } from 'svelte';
	import type { GitHubCommit } from './github.types';
	import Paragraph from '../../../../../components/typography/Paragraph.svelte';
	import { GitCommitHorizontal } from 'lucide-svelte';
	import { Link } from '@lucide/svelte';

	type Props = {
		repo: string;
		author: string;
	};

	const { repo, author }: Props = $props();

	let response: AxiosResponse<GitHubCommit[]> | undefined = $state();

	onMount(async () => {
		const baseLink = `https://api.github.com/repos/${author}/${repo}/commits`;

		response = await axios.get(baseLink);
	});
</script>

{#if response}
	<div
		class="flex items-center justify-between gap-1 border border-t-0 border-neutral-800/60 bg-neutral-900/60 p-3 px-5"
	>
		<div class="flex flex-col gap-1">
			<span class="flex items-center gap-1 text-[12px] font-bold text-neutral-400"
				><GitCommitHorizontal />
				<p>OSTATNI COMMIT</p>
				<p>{'('}{new Date(response.data[0].commit.author.date).toLocaleString('pl-PL')}{')'}</p>
			</span>
			<p class="text-[14px]">{response.data[0].commit.message}</p>
		</div>
		<a
			href={response.data[0].html_url}
			target="_blank"
			class="cursor-pointer rounded-full p-3 text-neutral-400 transition-colors hover:bg-neutral-800/30 hover:text-green-500"
		>
			<Link />
		</a>
	</div>
{/if}

<style>
	a:hover {
		color: white;
	}
</style>
