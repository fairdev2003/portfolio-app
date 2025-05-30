<script>
	import Github from '../assets/github.png';
	import Linkedin from '../assets/linkedin.png';
	import Klimson from '../assets/klimson.jpeg';
</script>

<div class="mt-10 h-0.5 w-full bg-gray-500 md:hidden" />
<div
	class="sticky top-0 col-span-1 mt-10 flex flex-col items-center justify-center gap-5 p-5 md:flex md:flex-row lg:mt-0 lg:flex-col"
>
	<div class="h-48 w-48 overflow-hidden rounded-full">
		<img src={Klimson} alt="Example" class="h-full w-full object-contain" />
	</div>
	<h2 class="text-xl font-[500] text-gray-400">fairdev2003</h2>
	<div class="flex flex-col gap-3">
		<div class="flex items-center gap-2">
			<img src={Github} alt="GitHub" class="h-5 w-5 grayscale" />
			<a href="https://github.com/fairdev2003" target="_blank" class="font-[500] text-blue-500"
				>Github</a
			>
		</div>
		<div class="flex items-center gap-2">
			<img src={Linkedin} alt="GitHub" class="h-5 w-5 invert" />
			<a
				href="https://pl.linkedin.com/in/jakub-klimkiewicz-768a00278"
				target="_blank"
				class="font-[500] text-blue-500">Linkedin</a
			>
		</div>
		<div class="flex items-center gap-2">
			<img
				src="https://img.icons8.com/?size=100&id=89777&format=png&color=0000000"
				alt="GitHub"
				class="h-5 w-5 invert"
			/>
			<a
				href="https://github.com/fairdev2003/portfolio-app"
				target="_blank"
				class="font-[500] text-blue-500">Kod strony</a
			>
		</div>
	</div>
</div>

<style>
</style>
