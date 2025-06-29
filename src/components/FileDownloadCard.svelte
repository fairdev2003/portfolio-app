<script lang="ts">
	let { path = '', filename = '', size = '' } = $props();
</script>

<div>
	<div class="flex h-auto items-center gap-4 rounded-2xl bg-[#131333] px-5 py-2">
		<div class="h-10 w-10 rounded-full bg-[#27275b] p-2">
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
