<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<h2>🧷 RETAIN – zachowywanie zapasów</h2>

	<p>
		Słowo kluczowe <span class="rounded-md bg-gray-800 p-0.5 px-1 font-mono text-sm text-gray-300"
			>RETAIN</span
		> pozwala Ci określić, ile przedmiotów ma pozostać w źródłowym ekwipunku. Dzięki temu unikniesz opróżnienia
		kontenera do zera.
	</p>

	<h3>📌 Podstawowa składnia:</h3>
	<SfmCodeArea program_link="/sfm/retain/01-retain-1.sfm" />

	<h3>📌 Określenie ilości przesuwanych przedmiotów:</h3>
	<p>Możesz także przesunąć określoną liczbę przedmiotów, zachowując minimum w ekwipunku:</p>
	<SfmCodeArea program_link="/sfm/retain/02-retain-25.sfm" />

	<h3>📌 Retain z konkretnym przedmiotem:</h3>
	<SfmCodeArea program_link="/sfm/retain/03-retain-specific.sfm" />

	<h3>📌 Retain z wieloma przedmiotami:</h3>
	<p>
		Można podać wiele linii wejściowych z różnymi wartościami <span
			class="rounded-md bg-gray-800 px-1 font-mono text-sm text-gray-300">RETAIN</span
		>:
	</p>
	<SfmCodeArea program_link="/sfm/retain/04-multiple-retain.sfm" />

	<h3>📤 Retain przy OUTPUT:</h3>
	<p>
		<code>RETAIN</code> działa również z <code>OUTPUT</code> – ogranicza ilość przedmiotów w miejscu
		docelowym.
	</p>
	<SfmCodeArea program_link="/sfm/retain/05-output-retain.sfm" />

	<h3>📦 Limitowanie jednoczesne wejścia i zapasu:</h3>
	<p>
		Przy bardziej zaawansowanych scenariuszach możesz łączyć ilości wejściowe i `retain` w jednym
		wyrażeniu:
	</p>
	<SfmCodeArea program_link="/sfm/retain/06-retain-output-amount.sfm" />

	<h3>🧮 Złożony przykład z wieloma surowcami i retain:</h3>
	<SfmCodeArea program_link="/sfm/retain/07-complex-retain.sfm" />

	<h2 class="mt-6">📝 Uwagi:</h2>
	<ul class="space-y-2 text-sm text-slate-200">
		<li>
			✅ <strong>RETAIN</strong> można stosować przy <strong>INPUT</strong> i
			<strong>OUTPUT</strong>.
		</li>
		<li>✅ Można go łączyć z liczbami, typami przedmiotów oraz grupami zasobów.</li>
		<li>✅ RETAIN nie oznacza "tylko", a "zostaw co najmniej X".</li>
		<li>✅ Przy złożonych warunkach lepiej używać osobnych linii dla każdego surowca.</li>
	</ul>

	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}>
			{data.navigation?.left?.value}
		</SectorButton>
		<SectorButton right href={data.navigation?.right?.href}>
			{data.navigation?.right?.value}
		</SectorButton>
	</div>
</ResponsiveContainer>
