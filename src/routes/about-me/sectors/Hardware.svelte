<script lang="ts">
	import Terminal from '../../../components/terminal/Terminal.svelte';
	import { TerminalContext } from '../../../components/terminal/terminal.controls.svelte';
	import { VSCThemeColor } from '../../blog/sfm/(components)/styles/colors';
	import TerminalRecord from '../../../components/terminal/(components)/TerminalRecord.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import { SquareTerminal } from 'lucide-svelte';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex flex-col gap-4">
	<Heading id="Sprzęt" padding>Sprzęt</Heading>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- <div
		onclick={() => {
			TerminalContext.OpenTerminal();
			console.log(TerminalContext.terminalOpenState);
		}}
		class="box h-20 cursor-pointer rounded-2xl"
	></div> -->
	<div
		onclick={() => {
			TerminalContext.OpenTerminal();
			console.log(TerminalContext.terminalOpenState);
		}}
		class="flex w-full cursor-pointer gap-3 border border-neutral-700/60 bg-neutral-900/60 p-3 hover:bg-neutral-800/60"
	>
		<div class="flex-shrink-0">
			<div class={`flex size-18 items-center justify-center rounded-md bg-blue-800/60`}>
				<!-- <img alt="svelte" class="size-10" /> -->
				<div class="text-blue-400">
					<SquareTerminal size={50} />
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-[20px]">Odtwórz terminal</h3>
			<p class="text-[15px] text-neutral-400">Użytkownik Linuxa płakał jak odpalał</p>
		</div>
	</div>
</div>
<Terminal>
	<p class={`${VSCThemeColor.HighlightBlue} string font-bold`}>$:~ System</p>
	<!-- SYSTEM -->
	<TerminalRecord key="Dystybucja" value="Arch Linux" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord key="Kernel" value="Linux 6.16.5-arch1-1" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord key="Shell" value="zsh 5.9" keyColor={VSCThemeColor.MainPurple} />

	<TerminalRecord
		key="Środowisko graficzne"
		value="GNOME 48.4"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord key="Menadżer Okienek" value="Wayland" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord
		key="Czcionka"
		value="JetBrains Mono (11pt, SemiBold)"
		keyColor={VSCThemeColor.MainPurple}
	/>

	<!-- PERYPETIE -->
	<p class={`${VSCThemeColor.HighlightBlue} string string font-bold`}>$:~ Peryferie</p>
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
	<!-- PERYFERIE -->
	<p class={`${VSCThemeColor.HighlightBlue} string font-bold`}>$:~ Podzespoły komputera</p>
	<TerminalRecord
		key="Płyta Główna"
		value="Jakas random lenovo xD"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord
		key="Procesor"
		value="Intel Core i5-7400 (4)"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord
		key="Karta Graficzna"
		value="NVIDIA GeForce GTX 1050 Ti"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord key="VRAM" value="4096MiB" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord key="RAM" value="16GiB" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord
		key="Dysk 1 (Główny)"
		value="Laxar 610 M.2 NVME 2TB"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord key="Dysk 2" value="128GB Patriot SATA" keyColor={VSCThemeColor.MainPurple} />
	<p class={`${VSCThemeColor.HighlightBlue} string font-bold`}>$:~ Partycja Systemowa</p>
	<TerminalRecord key="Dysk '/' (System)" value="50 GIB" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord
		key="Dysk '/home' (Katalog domowy)"
		value="1.78 TiB"
		keyColor={VSCThemeColor.MainPurple}
	/>
	<TerminalRecord key="Dysk boot (EFI)" value="100 MiB" keyColor={VSCThemeColor.MainPurple} />
	<TerminalRecord key="Pamięć Swap (` RAM)" value="4 GiB" keyColor={VSCThemeColor.MainPurple} />
</Terminal>

<style>
	@font-face {
		font-family: 'Consolas';
		src: url('./assets/consolas.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.string {
		font-family: 'Consolas', monospace;
		min-height: 1.5rem; /* 20px */
		line-height: 1.5rem;
	}

	h3 {
		font-family: 'DM Serif Display', serif;
	}
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
