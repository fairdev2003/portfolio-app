<script lang="ts">
	import DiskImage from './assets/disk.png';
	import CodeLine from './CodeLine.svelte';
	import { Clipboard } from 'lucide-svelte';
	import KeywordPart from './KeywordPart.svelte';
</script>

<div class="h-max-[300px] w-full rounded-md border-2 border-slate-700 bg-gray-800">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="flex w-full justify-between rounded-t-md bg-slate-700 p-2 px-3">
		<div class="flex items-center gap-2">
			<img src={DiskImage} alt="disk" class="h-5 w-5" />
			<p class="text-sm text-gray-400">{'01-example.sfm'}</p>
		</div>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			onclick={() => {
				navigator.clipboard.writeText('01-example.sfm');
			}}
			class="flex cursor-pointer items-center gap-1 text-gray-400 select-none"
		>
			<p class="text-[13px]">Copy</p>
			<Clipboard size={15} />
		</div>
	</div>
	<div class="overflow-x-scroll overflow-y-auto p-2 whitespace-nowrap">
		<CodeLine>
			<KeywordPart className="text-[#9CDCFE] hover:bg-blue-500">NAME</KeywordPart>
			<span class="text-[#CE9178]">"Gregiorius Master Plan"</span>
		</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- zapierdala 1</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">20</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT FROM <span class="text-[#D4D4D4]">chest_1</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT TO <span class="text-[#D4D4D4]">chest_2</span></CodeLine
		>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- zapierdala 2</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">30</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT FROM <span class="text-[#D4D4D4]">oil_tank</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT <span class="text-[#9CDCFE]">fluid::</span> TO
			<span class="text-[#D4D4D4]">diesel_generator</span></CodeLine
		>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- zapierdala 3</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">20</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT FROM <span class="text-[#D4D4D4]">sink</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT TO <span class="text-[#D4D4D4]">water_tank</span></CodeLine
		>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>
	</div>
</div>

<style>
</style>
