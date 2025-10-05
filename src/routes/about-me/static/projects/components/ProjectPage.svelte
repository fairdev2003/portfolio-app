<script lang="ts">
	import type { Project, ProjectId } from '../../project.types';
	import { projects } from '../../projects';
	import KlimsonServer from '../KlimsonServer.svelte';
	import PortfolioApp from '../PortfolioApp.svelte';

	type Props = {
		id: ProjectId;
	};
	const { id } = $props();

	function getProjectRecord(id: string): Project | undefined {
		const p = projects.find((p) => p.id === id);
		return p;
	}
</script>

<div>
	{#if id === 'portfolio'}
		<PortfolioApp project={getProjectRecord(id)} />
	{/if}
	{#if id === 'klimson-server'}
		<KlimsonServer project={getProjectRecord(id)} />
	{/if}
</div>
