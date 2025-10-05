<script lang="ts">
	import Heading from '../../../../../components/typography/Heading.svelte';
	import StatusBit from '../../../sectors/components/StatusBit.svelte';
	import type { Project } from '../../project.types';

	const project: Project = $props();
</script>

<div class="flex-col gap-5 p-5 lg:flex lg:flex-row lg:justify-start">
	<div
		class={`mx-auto flex size-40 items-center justify-center rounded-lg lg:mx-px ${project.logo?.color}`}
	>
		<img alt="svelte" class="flex size-30 opacity-80" src={project.logo?.url} />
	</div>
	<div class="mt-3 lg:mt-0">
		<Heading idTrackingDisabled>{project.name}</Heading>
		<div class="mt-2">
			<StatusBit status={project.status} />
		</div>
	</div>
</div>
