
<script>
	const texts = ["Update README.md",
		"Create data.json",
		"Update bot.py",
		"Update .env",
		"Update data.json"
	];

	const easterEgg = texts[Math.floor(Math.random() * texts.length)];

</script>

<footer class="flex flex-col items-center justify-center mb-20 gap-4">
	<div class="h-0.5 w-50 bg-gray-500"></div>
	<p>
		✨ Inspired by {" "}<a href="https://aroreretini.dev/" target="_blank">https://aroreretini.dev/</a>
	</p>
	<div class="flex flex-col justify-start gap-2">
		<code class="bg-[#131333] p-1.5 px-10 flex justify-center gap-2 select-none rounded-lg">
			<span class="text-green-500">{">"}</span>  {easterEgg}
		</code>
		<p>
			© 2025 Jakub Klimkiewicz. All rights reserved.
		</p>
	</div>


</footer>