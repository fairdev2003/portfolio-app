<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import BlogHeading from '../../../../components/blog/BlogHeading.svelte';
	import Klimson from '../../../../assets/klimson.jpeg';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<BlogHeading
		readingTime={5}
		title={'Fundamenty'}
		author="Klimson"
		publishDate={new Date('09-03-2026')}
		tags={['minecraft', 'modding', 'sfm', 'programowanie']}
		authorImageUrl={Klimson}
	/>
	<h2>📦 Przenoszenie przedmiotów – podstawy</h2>

	<p>
		Najprostszym działaniem w SFM jest przenoszenie przedmiotów z jednego inwentarza do drugiego.
		Odbywa się to za pomocą instrukcji <code>INPUT</code> i <code>OUTPUT</code>. Można je rozszerzać
		dodatkowymi parametrami, takimi jak liczba przedmiotów, konkretna nazwa przedmiotu, lub użycie
		słów kluczowych jak <code>EACH</code>.
	</p>

	<h3>📖 Przykład ogólny</h3>
	<SfmCodeArea program_link="/sfm/input-output/01-basic.sfm" />

	<h3>Różne warianty użycia INPUT/OUTPUT</h3>
	<ul class="ml-5 list-disc space-y-3 text-sm text-slate-200">
		<li>
			<strong>Przenoszenie wszystkich przedmiotów:</strong>
			<SfmCodeArea program_link="/sfm/input-output/02-all-items.sfm" />
		</li>
		<li>
			<strong>Przenoszenie pojedynczego przedmiotu:</strong>
			<SfmCodeArea program_link="/sfm/input-output/03-single-item.sfm" />
		</li>
		<li>
			<strong>Wysyłanie po 1 przedmiocie do każdego inwentarza:</strong>
			<SfmCodeArea program_link="/sfm/input-output/04-each-output.sfm" />
		</li>
		<li>
			<strong>Wydobycie 1 przedmiotu z każdego źródła:</strong>
			<SfmCodeArea program_link="/sfm/input-output/05-each-input.sfm" />
		</li>
		<li>
			<strong>Filtrowanie po nazwie przedmiotu:</strong>
			<SfmCodeArea program_link="/sfm/input-output/06-iron-ingot.sfm" />
		</li>
		<li>
			<strong>Obsługa nazw zawierających słowa kluczowe:</strong>
			<SfmCodeArea program_link="/sfm/input-output/07-redstone.sfm" />
		</li>
	</ul>

	<h3 class="mt-5">📝 Uwagi:</h3>
	<ul class="space-y-2 text-sm text-slate-200">
		<li>
			📃 Słowa kluczowe w SFM są <strong>niewrażliwe na wielkość liter</strong> – możesz pisać
			<code>INPUT</code>, <code>input</code>, <code>Input</code> itd.
		</li>
		<li>
			📦 Inwentarze oznaczasz etykietą w świecie gry. SFM korzysta z tych etykiet jak ze zmiennych.
		</li>
		<li>
			💬 Jeśli nazwa przedmiotu koliduje ze słowem kluczowym, musisz ją ująć w cudzysłów, np.
			<code>"redstone"</code>.
		</li>
	</ul>

	<h3 class="mt-5">👍 Dobry zwyczaj</h3>
	<p>
		Unikaj przepisywania tych samych instrukcji – używaj bloków warunkowych <code>IF</code>, pętli,
		i wzorców nazw aby tworzyć elastyczne programy.
	</p>

	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}>
			{data.navigation?.left?.value}
		</SectorButton>
		<SectorButton right href={data.navigation?.right?.href}>
			{data.navigation?.right?.value}
		</SectorButton>
	</div>
</ResponsiveContainer>

<svelte:head>
	<title>SFM - Fundamenty</title>
	<meta name="description" content="Strona glowna mojej strony" />
</svelte:head>
