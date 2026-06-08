<script lang="ts">
	import MarkdownRenderer from '../../../../components/blog/MarkdownRenderer.svelte';
	import Heading from '../../../../components/typography/Heading.svelte';
	import StatusBit from '../../sectors/components/StatusBit.svelte';
	import type { Project, ProjectPage } from '../project.types';
	import { projects } from '../projects';
	import CommitHistory from './components/CommitHistory.svelte';
	import ProjectGeneralInfo from './components/ProjectGeneralInfo.svelte';

	type Props = {
		project?: Project;
	};

	const { project }: Props = $props();
</script>

{#if project}
	<div class="lg:px-5">
		<ProjectGeneralInfo {...project} />
		<CommitHistory repo="klimson-dashboard" author="fairdev2003" />
	</div>

	<div class="p-5">
		<MarkdownRenderer
			markdown="https://api.klimson.dev/interface/bucket/klimson.dev/projects/dashboard/dashboard.md"
		/>
	</div>
{/if}
