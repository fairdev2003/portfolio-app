<script lang="ts">
	import DiskImage from './assets/disk.png';
	import CodeLine from './CodeLine.svelte';
	import { Clipboard } from 'lucide-svelte';
	import KeywordPart from './KeywordPart.svelte';
	import { VSCThemeColor } from './styles/colors';
	import { SFMCompiler } from '$lib';
	import { onMount } from 'svelte';

	type SFMCodeAreaPage = 'no_compiler_example' | 'barebone' | 'compiler_test';
	let copiedStatus: boolean = $state(false);
	let sfm_program_lines: string[] = $state([]);
	let sfm_program: string = $state('');
	let code_area_page: SFMCodeAreaPage = $state('compiler_test');

	const handleCodeAreaPageChange = (page: SFMCodeAreaPage) => (code_area_page = page);

	type Props = {
		program_link?: string;
	};

	const { program_link = '' }: Props = $props();

	onMount(async () => {
		sfm_program_lines = await SFMCompiler.GetSuperFactoryManagerLines(program_link);
		if (program_link !== '') {
			sfm_program = await SFMCompiler.FetchSuperFactoryManagerContent(program_link);
		}
	});
</script>

<div
	id={SFMCompiler.ExtractFileNameFromURL(program_link)}
	class="h-min-[300px] w-full rounded-md border-2 border-slate-700 bg-gray-800"
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="flex w-full justify-between rounded-t-md bg-slate-700 p-2 px-3">
		<div class="flex items-center gap-2">
			<img src={DiskImage} alt="disk" class="h-5 w-5" />
			<p class="text-sm text-gray-400">
				<a href={program_link} target="_blank" class="text-gray-400"
					>{SFMCompiler.ExtractFileNameFromURL(program_link)}</a
				>
				<!-- |
				<span class={VSCThemeColor.StringGreen}>{code_area_page}</span> -->
			</p>
		</div>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		{#if sfm_program !== ''}
			<div
				onclick={() => {
					// TODO: write actual code
					navigator.clipboard.writeText(sfm_program);
					copiedStatus = true;
					setTimeout(() => {
						copiedStatus = false;
					}, 4000);
				}}
				class="flex cursor-pointer items-center gap-1 text-gray-400 transition-colors select-none hover:text-white"
			>
				{#if copiedStatus}
					<p class="text-[13px] text-green-500">Copied!</p>
				{:else}
					<p class="text-[13px]">Copy</p>
					<Clipboard size={15} />
				{/if}
			</div>
		{/if}
	</div>

	<!-- No Compiler Example -->
	{#if sfm_program !== ''}
		{#if code_area_page === 'no_compiler_example'}
			{@render CodeAreaExample()}
		{/if}

		<!-- Only Formatted Code without colors -->
		{#if code_area_page === 'barebone'}
			<div class="p-2">
				{#each sfm_program_lines as line}
					<CodeLine className="">{line}</CodeLine>
				{/each}
			</div>
		{/if}
		<!-- Compiler testing -->
		{#if code_area_page === 'compiler_test'}
			<div class="p-2">
				{#each sfm_program_lines as line}
					<CodeLine>
						{@html SFMCompiler.highlightCustomSFM(line)}
					</CodeLine>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="min-h-[100px] p-2">
			<CodeLine className={VSCThemeColor.VariableBlue}>NO PROGRAM!</CodeLine>
		</div>
	{/if}

	<!-- <div class="flex h-[30px] items-center gap-2 bg-slate-700 px-2"></div> -->
</div>

<!-- Example without compiler -->
{#snippet CodeAreaExample()}
	<div class="overflow-hidden p-2 whitespace-nowrap">
		<CodeLine>
			<KeywordPart className="text-[#9CDCFE] hover:bg-blue-500">NAME</KeywordPart>
			<span class="text-[#CE9178]">"Gregiorius Master Plan"</span>
		</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- statement 1</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">20</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT <span class={VSCThemeColor.NumberYellow}>5</span>
			<span class={VSCThemeColor.VariableBlue}>*plate*, *sheet*</span>
			FROM
			<span class="text-[#D4D4D4]">manual_chest, ae2_chest</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT TO <span class="text-[#D4D4D4]">depot</span></CodeLine
		>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- statement 2</CodeLine>
		<CodeLine className="text-[#c586c0]"
			>EVERY <span class="text-[#DCDCAA]">30</span> TICKS DO</CodeLine
		>

		<CodeLine indent={1} className="text-[#c586c0]"
			>INPUT FROM <span class="text-[#D4D4D4]">oil_tank</span></CodeLine
		>
		<CodeLine indent={1} className="text-[#c586c0]"
			>OUTPUT <span class="text-[#9CDCFE]">fluid::</span> TO
			<span class="text-[#D4D4D4]">diesel_generator, robin_hood</span>
			<span class={VSCThemeColor.VariableOrange}
				>ROUND ROBIN BY <span class={VSCThemeColor.NumberYellow}>BLOCK</span></span
			>
		</CodeLine>
		<CodeLine className="code text-[#c586c0]">END</CodeLine>

		<CodeLine />
		<CodeLine className="text-[#6A9955]">-- statement 3</CodeLine>
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
{/snippet}

<style>
	a {
		color: oklch(70.7% 0.022 261.325);
	}
</style>
