<script lang="ts">
	import DiskImage from './assets/disk.png';
	import CodeLine from './CodeLine.svelte';
</script>

<div class="h-[300px] w-full rounded-md border-2 border-slate-700 bg-gray-800">
	<div class="w-full rounded-t-md bg-slate-700 p-2 px-3">
		<div class="flex gap-2">
			<img src={DiskImage} alt="disk" class="h-5 w-5" />
			<p class="text-sm text-gray-400">{'01-example.sfm'}</p>
		</div>
	</div>
	<div class="overflow-x-auto p-2 whitespace-nowrap">
		<CodeLine className="text-[#9CDCFE]">
			NAME <span class="text-[#CE9178]">"Gregiorius Master Plan"</span>
		</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- zapierdala</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">20</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT FROM <span class="text-[#D4D4D4]">a</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT TO <span class="text-[#D4D4D4]">b</span></CodeLine
		>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Consolas';
		src: url('./assets/consolas.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.code {
		font-family: 'Consolas', monospace;
	}
</style>
