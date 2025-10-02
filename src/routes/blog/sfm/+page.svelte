<script>
	import PageNavigator from '../(components)/PageNavigator.svelte';
	import ResponsiveContainer from '../../../components/responsive/ResponsiveContainer.svelte';
	import SfmCodeArea from './(components)/SFMCodeArea.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<h2>🧠 Super Factory Manager</h2>

	<p>
		<strong>Super Factory Manager</strong> to nowoczesny mod logistyczny do Minecrafta, który umożliwia
		tworzenie zaawansowanych systemów transportu i przetwarzania zasobów za pomocą prostego, przyjemnego
		języka programowania.
	</p>
	<p>
		Zaprojektowany z myślą o <strong>czytelności, elastyczności i zabawie</strong>, mod pozwala
		graczom tworzyć własne "programy logistyczne", które kontrolują przepływ przedmiotów, płynów,
		energii i innych zasobów w świecie gry
	</p>

	<h2>✨ Główne cechy:</h2>
	<ul class="space-y-2 text-sm text-slate-200">
		<li class="flex items-start gap-2">
			<span class="text-lg">📦</span>
			<p>
				<strong>Programowalna logistyka</strong> – twórz skrypty, które kontrolują zachowanie maszyn
				i zasobów.
			</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">💡</span>
			<p>
				<strong>Intuicyjna składnia</strong> – prosty język inspirowany LUA sprawia, że pisanie kodu
				to przyjemność.
			</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">⚡</span>
			<p><strong>Wydajność</strong> – lekka implementacja nie obciąża świata gry.</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">🧩</span>
			<p><strong>Modularność</strong> – idealnie współpracuje z innymi modami technicznymi.</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">🖥️</span>
			<p>
				<strong>Interfejs terminalowy</strong> – wszystko odbywa się wewnątrz specjalnych konsol i paneli.
			</p>
		</li>
	</ul>

	<h2>🛠️ Przykład prostego programu:</h2>
	<SfmCodeArea program_link="/sfm/simple_program.sfm" />

	<h2>🎯 Dla kogo?</h2>
	<p>
		Dla graczy, którzy lubią myśleć systemowo, bawić się automatyką i tworzyć efektywne rozwiązania.
		Mod idealnie sprawdzi się zarówno dla początkujących, jak i zaawansowanych inżynierów
		Minecrafta.
	</p>

	{#if data.navigation && data.navigation.left && data.navigation.right}
		<PageNavigator left={data.navigation.left} right={data.navigation.right} />
	{/if}
</ResponsiveContainer>

<svelte:head>
	<title>SFM - Wprowadzenie</title>
	<meta name="description" content="Strona glowna mojej strony" />
</svelte:head>

<style>
	@import 'tailwindcss';
	strong {
		color: #ce9178;
	}
</style>
