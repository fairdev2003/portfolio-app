<script lang="ts">
	import ResponsiveContainer from '../../../components/responsive/ResponsiveContainer.svelte';

	const goBack = () => {
		history.back();
	};
</script>

<ResponsiveContainer cols="2" className="flex flex-col gap-y-5 col-span-2">
	<div>
		<button
			onclick={() => {
				goBack();
			}}
			class="cursor-pointer rounded-lg border-1 border-gray-950 bg-gray-700 p-2 px-6 text-sm transition-colors hover:bg-gray-800"
		>
			{'Powrot'}
		</button>
	</div>
</ResponsiveContainer>

<style>
	.text {
		opacity: 85%;
	}
</style>
