<script lang="ts">
	import { tick } from 'svelte';
	import Box from '../../../components/Box.svelte';
	import Heading from '../../../components/Heading.svelte';
	import gsap from 'gsap';
	import Terminal from '../../../components/terminal/Terminal.svelte';
	import { TerminalContext } from '../../../components/terminal/terminal.controls.svelte';
	import { VSCThemeColor } from '../../blog/sfm/(components)/styles/colors';
	import TerminalRecord from '../../../components/terminal/(components)/TerminalRecord.svelte';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex flex-col gap-4">
	<Heading value="Sprzęt" />

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		onclick={() => {
			TerminalContext.OpenTerminal();
			console.log(TerminalContext.terminalOpenState);
		}}
		class="h-20 cursor-pointer rounded-2xl bg-[#131333] hover:bg-[#131333]/40"
	></div>
</div>

<Terminal>
	<p class={`${VSCThemeColor.HighlightBlue} font-bold`}>⟹ Sprzęt</p>
	<p class={'h-5'}>{'\n'}</p>
	<TerminalRecord key="Dystybucja" value="Arch Linux" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord
		key="Monitor 1 (Główny)"
		value="MSI Microstep 24 75hz 1920x1080"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord key="Monitor 2" value="Dell 75hz 1440x900" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord
		key="Klawiaturka"
		value="Keychron V3 Max Wireless Mechanical Keyboard"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord
		key="Myszka"
		value="Trust GXT 923 Wireless Gaming Mouse"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord
		key="Mikrofon"
		value="Novox NC1 Game Blue Snowball"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord
		key="Słuchawki"
		value="Sony WH-CH720N Noise Canceling Wireless Headphones"
		keyColor={VSCThemeColor.MainPurple}
	/>
</Terminal>
