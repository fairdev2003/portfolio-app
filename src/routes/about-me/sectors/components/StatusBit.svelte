<script lang="ts">
	import { CircleStop, StopCircleIcon } from 'lucide-svelte';
	import type { ProjectStatus } from '../../static/project.types';
	import PlaySVG from '$lib/svg/play.svg';

	type Props = {
		status: ProjectStatus;
	};

	const { status }: Props = $props();

	const theme = (): string => {
		switch (status) {
			case 'wip':
				return 'bg-green-400/30 border border-green-400/0 text-white';
			case 'archived':
				return '';
			case 'completed':
				return 'bg-green-400/30 border border-green-400 text-white';
		}
	};

	const name = (): string => {
		switch (status) {
			case 'wip':
				return 'W TRAKCIE';
			case 'archived':
				return 'Zaarchiwizowany';
			case 'completed':
				return 'Zakończony';
		}
	};
</script>

<div
	class={`${theme()} inline-flex h-[30px] items-center justify-center gap-1 rounded-full px-3 py-1`}
>
	<div class="text-[15px]">
		{#if status === 'wip'}
			<img alt={status} class="size-2" src={PlaySVG} />
		{/if}
		{#if status === 'archived'}{/if}
	</div>

	<p class="text-sm text-[12px]">{name()}</p>
</div>

<style>
</style>
