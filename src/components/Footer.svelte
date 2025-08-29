<script>
	const texts = [
		'Update README.md',
		'Create data.json',
		'Update bot.py',
		'Update .env',
		'Update data.json'
	];

	const easterEgg = texts[Math.floor(Math.random() * texts.length)];
</script>

<footer class="mb-20 flex flex-col items-center justify-center gap-4 pt-10">
	<div class="h-0.5 w-50 bg-gray-500"></div>

	<div class="flex flex-col justify-start gap-2">
		<code class="flex justify-center gap-2 rounded-lg bg-[#131333] p-1.5 px-10 select-none">
			<span class="text-green-500">{'>'}</span>
			{easterEgg}
		</code>
		<p>
			© 2025 <span class="text-red-500">/ TREŚĆ NIEDOSTĘPNA /</span> . All rights reserved.
		</p>
	</div>
</footer>
