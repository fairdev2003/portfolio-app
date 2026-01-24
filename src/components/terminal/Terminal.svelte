<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<script lang="ts">
	import { tick } from 'svelte';
	import { TerminalContext } from './terminal.controls.svelte';
	import { X } from 'lucide-svelte';
	import { Search } from '@lucide/svelte';
	import type { TerminalProps } from './types/terminal';

	const { children }: TerminalProps = $props();
</script>

{#if TerminalContext.terminalOpenState}
	<div
		onclick={(e) => {
			TerminalContext.CloseTerminal();
		}}
		class={`fixed inset-0 z-100 flex w-full flex-col items-center justify-center overflow-hidden bg-black/80 `}
	>
		<div
			bind:this={TerminalContext.TerminalReference}
			class="md:9/10 flex h-9/10 w-[98%] flex-col items-center justify-center lg:w-9/10"
		>
			<!-- Topbar -->
			<div
				onclick={(e) => {
					e.stopPropagation();
				}}
				class="flex h-12 w-full items-center justify-between bg-neutral-800 px-2 backdrop-brightness-75"
			>
				<button class="flex size-6 items-center justify-center rounded-lg hover:bg-neutral-700/60"
					><Search size={13} /></button
				>

				<p>klimson@klimson-arch:~</p>
				<!-- Close Button -->
				<div class="flex gap-2">
					<button
						class="flex size-6 items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/60"
						onclick={(e) => {
							e.stopPropagation();
							TerminalContext.CloseTerminal();
						}}>_</button
					>
					<button
						class="flex size-6 items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/60"
						onclick={(e) => {
							e.stopPropagation();
							TerminalContext.CloseTerminal();
						}}><X size={20} /></button
					>
				</div>
			</div>

			<div
				class="b-10 h-full w-full overflow-scroll border-1 border-neutral-800 bg-neutral-950 p-3"
			>
				<div
					onclick={(e) => {
						e.stopPropagation();
					}}
					class="flex w-full flex-col"
					bind:this={TerminalContext.TerminalContent}
				>
					{#if children}
						{@render children()}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<svelte:document
	onkeydown={(e) => {
		if (e.key === 'Escape') {
			TerminalContext.CloseTerminal();
		}
	}}
/>

<style>
	::-webkit-scrollbar {
		display: none;
	}

	::-webkit-scrollbar-track {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		display: none;
	}

	::-webkit-scrollbar-thumb:hover {
		display: none;
	}
</style>
