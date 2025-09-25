<script lang="ts">
	let { path = '', filename = '', size = '' } = $props();
</script>

<div>
	<div class="box flex h-auto items-center gap-4 rounded-2xl px-5 py-2">
		<div class="h-12 w-12 rounded-full bg-neutral-700/50 p-3">
			<img
				alt="file"
				src="https://img.icons8.com/?size=100&id=CslWyEDXb961&format=png&color=FFFFFF"
			/>
		</div>
		{#if path.length > 0}
			<div class="flex flex-col">
				<a href={path} download={filename} class="text-white">{filename}</a>
				<p class="font-[500] text-gray-300">{size}</p>
			</div>
		{/if}
		{#if path.length == 0}
			<div class="flex flex-col p-1">
				<p class="font-[500] text-white">{filename}</p>
				<p class="font-[500] text-red-500">Ten plik jest niedostępny do pobrania</p>
			</div>
		{/if}
	</div>
</div>

<style>
	a {
		color: white;
		font-weight: bold;
	}
</style>
