<script lang="ts">
	import { Github } from '@lucide/svelte';
	import Heading from '../../../../../components/typography/Heading.svelte';
	import StatusBit from '../../../sectors/components/StatusBit.svelte';
	import type { Project } from '../../project.types';
	import { EarthIcon } from 'lucide-svelte';

	const project: Project = $props();

	// 	type Project = {
	//     id: string;
	//     name: string;
	//     description: string;
	//     category: "web" | "mobile" | "library" | "tool";
	//     status: "wip" | "completed" | "archived";
	//     techStack: {
	//         name: string;
	//         iconUrl?: string | undefined;
	//         docsUrl?: string | undefined;
	//     }[];
	//     links: {
	//         type: "repo" | "demo" | "docs" | "design";
	//         url: string;
	//     }[];
	//     screenshots?: string[] | undefined;
	//     logo?: {
	//         url: string;
	//         color?: string | undefined;
	//         style?: string | undefined;
	//     } | undefined;
	//     startDate?: string | undefined;
	//     endDate?: string | undefined;
	//     features?: string[] | undefined;
	// }
</script>

<div
	class="flex-col gap-5 border-1 border-neutral-800/60 bg-neutral-900/60 p-5 lg:flex lg:flex-row lg:justify-start"
>
	<div
		class={`mx-auto flex size-40 items-center justify-center rounded-lg lg:mx-px ${project.logo?.color}`}
	>
		<img alt="svelte" class="flex size-30 opacity-80" src={project.logo?.url} />
	</div>
	<div class="my-5">
		<div class="flex items-center gap-2">
			<Heading idTrackingDisabled class="flex items-center"><p>{project.name}</p></Heading>
			<StatusBit status={project.status} />
		</div>

		<div class="mt-2 flex flex-col gap-2">
			{#each project.links as { type, url }}
				{@render Link(url, type)}
			{/each}
		</div>
	</div>
</div>

{#snippet Link(url: string, type: string)}
	<span class="flex items-center gap-1">
		{#if type == 'repo'}
			<Github color="white" size="20px" />
		{/if}
		{#if type == 'demo'}
			<EarthIcon color="white" size="20px" />
		{/if}
		<a href={url} target="_blank">{url.replace('https://', '')}</a>
	</span>

	<style>
		a {
			font-size: 14px;
			color: gray;
			/* #a1a1a1 */
		}
	</style>
{/snippet}

<style>
</style>
