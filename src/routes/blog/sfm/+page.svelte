<script>
	import ResponsiveContainer from '../../../components/responsive/ResponsiveContainer.svelte';
	import SfmCodeArea from './(components)/SFMCodeArea.svelte';
</script>

<ResponsiveContainer cols="2" className="flex flex-col gap-y-3">
	<h2>Super Factory Manager</h2>

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

	<p>
		Link do moda: <a
			href="https://www.curseforge.com/minecraft/mc-mods/super-factory-manager"
			target="_blank">https://www.curseforge.com/minecraft/mc-mods/super-factory-manager</a
		>
	</p>
	<h2>🛠️ Przykład prostego programu:</h2>
	<SfmCodeArea />
</ResponsiveContainer>

<style>
	strong {
		color: #ce9178;
	}
	a {
		color: #166a98;
	}
</style>
