<script lang="ts">
	import { VSCThemeColor } from '../../../routes/blog/sfm/(components)/styles/colors';
	import type { TerminalRecordType } from '../types/terminal';

	const {
		key,
		keyColor,
		value = 'Foreground',
		valueColor = 'Foreground'
	}: TerminalRecordType = $props();
</script>

<p class="flex flex-col text-white lg:flex-row">
	<span class={`${keyColor} font-bold`}>{key}<span class="mr-2 text-white">{':'}</span></span>

	<span class={valueColor}>{value}</span>
</p>
