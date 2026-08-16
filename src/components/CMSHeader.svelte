<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tabs from './Tabs.svelte';
	import ToggleEditMode from './cms/ToggleEditMode.svelte';
</script>

<div
	class="sticky top-0 flex h-15 w-full items-center justify-between rounded-xl bg-neutral-900 p-6"
>
	<div class="flex items-center gap-2">
		<a
			href="https://dashboard.klimson.dev/dashboard"
			target="_blank"
			class="flex cursor-pointer items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 p-2 shadow-2xl hover:border-neutral-600 hover:bg-neutral-700"
		>
			<Icon icon="dinkie-icons:mango" class="text-blue-500" width="20" height="20" />
		</a>
		<p class="text-neutral-200">CMS Header</p>
	</div>

	<div>
		<ToggleEditMode />
	</div>
</div>
