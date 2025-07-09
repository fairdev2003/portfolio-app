<script lang="ts">
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<h2>🎯 PATTERNS — filtrowanie nazw przedmiotów</h2>

	<p>
		W SFM możesz używać wzorców (ang. <em>patterns</em>) opartych na wyrażeniach regularnych, aby
		dopasowywać grupy przedmiotów za pomocą jednego polecenia.
	</p>

	<h3>🔤 Składnia:</h3>
	<SfmCodeArea program_link="/sfm/patterns/01-pattern.sfm" />

	<h2>🧠 Wyjaśnienie:</h2>
	<ul class="space-y-2 text-sm text-slate-200">
		<li class="flex items-start gap-2">
			<span class="text-lg">✅</span>
			<p>
				Wzorce muszą być <strong>ujęte w cudzysłowy</strong> — np.
				<code>"minecraft:iron_ingot"</code> lub <code>".*:(iron|copper)_ingot"</code>.
			</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">✅</span>
			<p>
				Są one <strong>bazowane na regex (wyrażeniach regularnych)</strong>, a nie SQL. Dzięki temu
				są dużo bardziej elastyczne.
			</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">✅</span>
			<p>
				Aby dopasować wszystko, użyj <code>.*</code> zamiast <code>*</code>. Klasyczny SQL-owy zapis
				nie zadziała.
			</p>
		</li>
	</ul>

	<h3>📌 Przykład użycia z dopasowaniem różnych sztabek:</h3>
	<SfmCodeArea program_link="/sfm/patterns/02-ingots.sfm" />

	<h3>🛠️ Przykłady wzorców:</h3>
	<ul class="space-y-1 text-sm text-slate-300">
		<li>
			<code>".*:(iron|copper)_ingot"</code> — dopasuje wszystkie sztabki żelaza lub miedzi z dowolnego
			moda.
		</li>
		<li><code>"minecraft:.*"</code> — wszystko z namespace <code>minecraft</code>.</li>
		<li><code>".*_nugget"</code> — wszystkie przedmioty kończące się na <code>_nugget</code>.</li>
		<li>
			<code>"create:(zinc|brass)_.*"</code> — dopasowuje np. <code>create:zinc_gear</code>,
			<code>create:brass_sheet</code>.
		</li>
	</ul>

	<h2 class="mt-6">⚠️ Uwaga:</h2>
	<ul class="space-y-2 text-sm text-orange-200">
		<li class="flex items-start gap-2">
			<span class="text-lg">❌</span>
			<p>
				<code>"*:iron_ingot"</code> — to NIE zadziała. Gwiazdka nie oznacza „cokolwiek” bez użycia
				<code>.*</code>.
			</p>
		</li>
		<li class="flex items-start gap-2">
			<span class="text-lg">✅</span>
			<p>
				<code>".*:iron_ingot"</code> — poprawny zapis dopasowujący wszystkie <code>iron_ingot</code>
				niezależnie od moda.
			</p>
		</li>
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
