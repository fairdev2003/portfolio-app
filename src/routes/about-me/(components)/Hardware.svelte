<script lang="ts">
	import { tick } from 'svelte';
	import Box from '../../../components/Box.svelte';
	import Heading from '../../../components/Heading.svelte';
	import gsap from 'gsap';
	import Terminal from '../../../components/terminal/Terminal.svelte';
	import { TerminalContext } from '../../../components/terminal/terminal.controls.svelte';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex flex-col gap-4">
	<Heading value="Sprzęt" />

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		onclick={() => {
			TerminalContext.OpenTerminal();
			console.log(TerminalContext.terminalOpenState)
		}}
		class="h-20 cursor-pointer rounded-2xl bg-[#131333] hover:bg-[#131333]/40"></div>
</div>

<Terminal />

