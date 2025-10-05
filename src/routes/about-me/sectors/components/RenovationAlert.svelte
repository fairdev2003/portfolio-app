<script lang="ts">
	import Paragraph from '../../../../components/typography/Paragraph.svelte';

	type Props = {
		small?: boolean;
	};

	const { small = false } = $props();
</script>

<div
	class={`flex items-center gap-5 border border-orange-500/60 bg-orange-500/30 ${!small ? 'p-5' : 'p-2'}`}
>
	<span class={!small ? `text-[30px]` : 'text-[25px]'}>🚧</span>
	<Paragraph
		class={!small ? `text-[17px] font-[500] text-white` : 'text-[15px] font-[500] text-white'}
		>Ta część strony jest w remoncie</Paragraph
	>
</div>
