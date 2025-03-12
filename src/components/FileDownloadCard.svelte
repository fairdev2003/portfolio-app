<script lang="ts">
	let { path = "", filename = "", size = "" } = $props()
</script>

<div>
	<div class="flex gap-4 items-center px-5 bg-[#131333] h-18 rounded-2xl">


			<div class="bg-[#27275b] rounded-full w-10 h-10 p-2">
				<img alt="file" src="https://img.icons8.com/?size=100&id=CslWyEDXb961&format=png&color=FFFFFF"/>
			</div>
			{#if path.length > 0}
			<div class="flex flex-col">
				<a href={path} download={filename} class="text-white">{filename}</a>
				<p class="text-gray-300 font-[500]">{size}</p>
			</div>
			{/if}
			{#if path.length == 0}
				<div class="flex flex-col">
					<p class="text-red-500 font-[500]">Ten plik jest niedostępny do pobrania</p>
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