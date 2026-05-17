<script lang="ts">
	import type { Project, ProjectId } from '../../project.types';
	import { projects } from '../../projects';
	import KlimsonServer from '../KlimsonServer.svelte';
	import ObeyClanManager from '../ObeyClanManager.svelte';
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
	{#if id === 'klimson-dashboard'}
		<KlimsonServer project={getProjectRecord(id)} />
	{/if}
	{#if id === 'clan-manager'}
		<ObeyClanManager project={getProjectRecord(id)} />
	{/if}
</div>
