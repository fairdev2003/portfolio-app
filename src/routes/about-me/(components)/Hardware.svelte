<script>
	import Box from '../../../components/Box.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-4">
		<h2>Sprzęt</h2>
		<div class="h-0.5 flex-1 bg-gray-500"></div>
	</div>
	<div class="flex flex-col gap-1">
		<p class="font-[500] text-gray-500">
			Na codzień pracuje na komputerze stacjonarnym, natomiast jak jestem na uczelni czy po prostu
			poza domem korzystam z jakiegos losowego Chromebooka, który pierwszą swoją młodość ma już za
			sobą. Jednak stwierdziłem że dobrym pomysłem jest zainstalowanie na nim Archa i wgłebienie sie
			w świat Linuxa. Laptop działa jak nowo narodzony. Zawsze chciałem powiedzieć <u>
				<b><i>"i use arch btw"</i></b></u
			>. Bardzo sie ciesze ze udało mi sie przełamać na inny system niż Windows jak to było
			dotychczas.
		</p>
	</div>
	<div class="mt-5">
		<Box>
			<ul class="flex flex-col gap-1 font-[500] text-gray-400">
				<div class="mb-4 flex items-center gap-4">
					<h3 class="text-2xl font-bold whitespace-nowrap text-white">Główny komputer</h3>
					<div class="h-0.5 flex-1 bg-gray-500"></div>
				</div>
				<li>CPU - Intel Core i5-7400</li>
				<li>GPU - NVIDIA GeForce GTX 1050 Ti</li>
				<li>RAM - 16GB DDR4</li>
				<li>Dysk 1 - Lexar 620 2TB M.2 Nvme</li>
				<li>Dysk 2 - Patriot 120GB SATA</li>
				<li>Klawiatura - Keychron V3 Max RGB</li>
				<li>Myszka - GxTrust Gaming</li>
				<li>Mikrofon - Novox NC-1 Game</li>
				<li>Monitor 1 - MSI</li>
				<li>Monitor 2 - Dell</li>
				<li>System - Zorin OS (Ubuntu)</li>
				<li>Środowisko Graficzne - Gnome</li>
			</ul>
		</Box>
	</div>
	<Box>
		<ul class="flex flex-col gap-1 font-[500] text-gray-400">
			<div class="mb-4 flex items-center gap-4">
				<h3 class="text-2xl font-bold whitespace-nowrap text-white">Laptop</h3>
				<div class="h-0.5 flex-1 bg-gray-500"></div>
			</div>
			<li>CPU - Intel Core i3-8130U</li>
			<li>GPU - Intel UHD Graphics 620 @ 1.00</li>
			<li>RAM - 8GB</li>
			<li>Dysk - 60GB</li>
			<li>System - Arch Linux</li>
			<li>Środowisko Graficzne - Hyprland (Wayland) + HyDE</li>
		</ul>
	</Box>
	<div class="flex flex-col gap-1">
		<p class="text-center text-sm font-[200] text-gray-500">i use arch btw...</p>
	</div>
</div>
