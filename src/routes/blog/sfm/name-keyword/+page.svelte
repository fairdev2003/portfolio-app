<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import BlogHeading from '../../../../components/blog/BlogHeading.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';
	import Klimson from '../../../../assets/klimson.jpeg';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="flex flex-col gap-y-3 col-span-2">
	<BlogHeading
		readingTime={5}
		title={'Name Keyword'}
		author="Klimson"
		publishDate={new Date('09-03-2026')}
		tags={['minecraft', 'modding', 'sfm', 'programowanie']}
		authorImageUrl={Klimson}
	/>

	<h3><span class="bg-gray-700 p-0.5 text-gray-400">NAME</span> - nadawanie nazyw programowi</h3>
	<p>
		Słowo kluczowe <span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">NAME</span> służy do
		nadania unikalnej, czytelnej nazwy Twojemu programowi SFM. Dzięki temu możesz łatwiej identyfikować
		programy, szczególnie gdy masz ich wiele w użyciu.
	</p>
	<h3>🔤 Składnia:</h3>
	<SfmCodeArea
		program_link={'https://api.klimson.dev/storage/file/klimson.dev/sfm/name/01-name.sfm'}
	/>
	<h3>📌 Przykład:</h3>
	<SfmCodeArea
		program_link={'https://api.klimson.dev/storage/file/klimson.dev/sfm/name/02-name.sfm'}
	/>
	<h2>📝 Uwagi:</h2>
	<ul class="space-y-2 text-sm text-slate-200">
		<li class="flex items-center gap-2">
			<span class="text-lg">✅</span>
			<p>
				Nazwa programu <strong>musi być zawarta w cudzysłowie</strong> (<span
					class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">"..."</span
				>).
			</p>
		</li>
		<li class="flex items-center gap-2">
			<span class="text-lg">✅</span>
			<p>
				Jest to <strong>pierwsza linia programu</strong> — musi znajdować się na górze pliku
				<span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">.sfm.</span>
			</p>
		</li>
		<li class="flex items-center gap-2">
			<span class="text-lg">✅</span>
			<p>
				Nazwa nie ma wpływu na logikę działania programu, ale jest bardzo przydatna organizacyjnie.
			</p>
		</li>
		<li class="flex items-center gap-2">
			<span class="text-lg">✅</span>
			<p>
				Działa niezależnie od wielkości liter (<span
					class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">NAME</span
				>, <span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">name</span>,
				<span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">Name</span>...).
			</p>
		</li>

		<li class="flex items-center gap-2">
			<span class="text-lg">✅</span>
			<p>
				Składnia <span class="bg-gray-800 p-0.5 text-gray-400">NAME</span>
				<strong>nie jest wymagana</strong> — program będzie działał poprawnie nawet bez niej.
			</p>
		</li>

		<h3 class="mt-5">✅ Dobry zwyczaj:</h3>
		<p>Używaj nazw opisujących działanie programu, np.:</p>
		<SfmCodeArea
			program_link={'https://api.klimson.dev/storage/file/klimson.dev/sfm/name/03-name.sfm'}
		/>
		<SfmCodeArea
			program_link={'https://api.klimson.dev/storage/file/klimson.dev/sfm/name/04-name.sfm'}
		/>
	</ul>

	<div class="mt-5 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}
			>{data.navigation?.left?.value}</SectorButton
		>
		<SectorButton right href={data.navigation?.right?.href}
			>{data.navigation?.right?.value}</SectorButton
		>
	</div>
</ResponsiveContainer>

<svelte:head>
	<title>SFM - NAME</title>
	<meta name="description" content="Strona glowna mojej strony" />
</svelte:head>
