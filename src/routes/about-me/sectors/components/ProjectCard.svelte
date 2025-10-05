<script lang="ts">
	import type { ProjectLogo } from '../../static/project.types';

	type Props = {
		logo?: ProjectLogo;
		name: string;
		description: string;
		onClick: () => void;
	};

	const { name, description, logo, onClick }: Props = $props();

	const logoUrl = 'https://icon.icepanel.io/Technology/svg/Python.svg';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={() => onClick()}
	class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
>
	<div class="flex-shrink-0">
		<div class={`flex size-18 items-center justify-center rounded-md ${logo?.color}`}>
			<img alt="svelte" class="size-10" src={logo?.url} />
		</div>
	</div>
	<div class="flex flex-col">
		<h3 class="text-[20px]">{name}</h3>
		<p class="text-[15px] text-neutral-400">
			{description}
		</p>
	</div>
</div>

<style>
	h3 {
		font-family: 'DM Serif Display', serif;
	}
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
