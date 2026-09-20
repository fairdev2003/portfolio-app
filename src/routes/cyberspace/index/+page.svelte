<script>
	import GeocitiesButton from '../components/GeocitiesButton.svelte';
	import RetroButton from '../components/RetroButton.svelte';
</script>

<section class="windows w-full">
	<h2 class="windows">About me</h2>
	<p>
		Hello! My name is Jacob. Im computer programmer currenly living in Poland in small town near
		Krakow. This project is extension to my main portfolio page which is retro themed. I love
		building websites in svelte. My favourite stack is NodeJs + Golang alongside with all frameworks
		such as Svelte, Gorm, Gin gonic. Working as security guard in really big mall
	</p>

	<div class="flex gap-1 mt-5">
		<a href="https://maniek86.xyz" target="_blank" class="mt-2 flex">
			<img
				src="https://api.klimson.dev/interface/bucket/klimson.dev/cyberspace/retro_maniek86.gif"
				alt="maniek"
				class="h-7.75 w-22"
			/>
		</a>

		<a href="https://klimson.dev/cyberspace" target="_blank" class="mt-2 flex">
			<img
				src="https://api.klimson.dev/interface/bucket/klimson.dev/cyberspace/klimson-88x31.gif"
				alt="klimson"
				class="h-7.75 w-22"
			/>
		</a>
	</div>
</section>

<style>
	@font-face {
		font-family: 'WindowsRegular';
		src: url('/WindowsRegular.ttf') format('truetype');
	}
</style>
