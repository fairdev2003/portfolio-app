<script lang="ts">
	import { editMode } from '$lib/cms/persist.svelte';
	import Icon from '@iconify/svelte';

	type Props = {};

	let {}: Props = $props();

	function toggleEditMode() {
		$editMode = !$editMode;
	}
</script>

<button
	onclick={toggleEditMode}
	class:text-blue-500={$editMode}
	class:text-white={!editMode}
	class="hover:bg-white/10 border border-transparent rounded-xl hover:border-neutral-white/20 p-2 cursor-pointer"
>
	<Icon icon="ph:cursor-fill" width="20" height="20" />
</button>
