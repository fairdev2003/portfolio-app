<script>
	import SfmCodeArea from '../(components)/SFMCodeArea.svelte';
	import SectorButton from '../../(components)/SectorButton.svelte';
	import ResponsiveContainer from '../../../../components/responsive/ResponsiveContainer.svelte';
	import Klimson from '../../../../assets/klimson.jpeg';
	import BlogHeading from '../../../../components/blog/BlogHeading.svelte';

	const { data } = $props();
</script>

<ResponsiveContainer cols={2} className="col-span-2 flex flex-col gap-y-3">
	<BlogHeading
		readingTime={5}
		title="Warunki logiczne"
		author="Klimson"
		publishDate={new Date('09-03-2026')}
		tags={['minecraft', 'modding', 'sfm', 'programowanie']}
		authorImageUrl={Klimson}
	/>

	<h2>Warunki logiczne <span class="text-sm text-gray-400">(IF, ELSE IF, ELSE)</span></h2>

	<p>
		Słowo kluczowe
		<span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">IF</span>
		pozwala na wykonanie instrukcji tylko wtedy, gdy warunek jest spełniony. Można go używać razem z
		<span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">ELSE IF</span>
		oraz
		<span class="rounded-md bg-gray-800 p-0.5 px-1 text-gray-400">ELSE</span>, tworząc rozbudowaną
		logikę działania programu.
	</p>

	<h3>📌 Przykład użycia:</h3>
	<SfmCodeArea program_link="/sfm/if/01-basic-if.sfm" />

	<h3>🔠 Składnia:</h3>
	<SfmCodeArea program_link={'/sfm/if/02-syntax.sfm'} />

	<h3>🔍 Działanie słowa <span class="bg-gray-800 p-0.5 text-gray-400">IF</span>:</h3>
	<p>Instrukcja warunkowa ma postać:</p>
	<SfmCodeArea program_link="/sfm/if/03-structure.sfm" />

	<h3>⚙️ Modyfikatory zbiorów:</h3>
	<p>
		Możesz określić, jak ma być interpretowana dana etykieta, jeśli istnieje wiele źródeł (np. kilka
		skrzynek z etykietą <i>a</i>):
	</p>
	<ul class="ml-5 list-disc space-y-1 text-sm text-slate-300">
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">every</span> — warunek musi być spełniony przez wszystkie
			źródła.
		</li>
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">some</span> — wystarczy, że jeden spełnia warunek.
		</li>
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">one</span> — dokładnie jeden musi spełniać.
		</li>
		<li><span class="bg-gray-800 p-0.5 text-gray-400">lone</span> — zero lub jeden spełniający.</li>
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">overall</span> — warunek liczony z sumy przedmiotów
			we wszystkich źródłach.
		</li>
	</ul>

	<h3>🧠 Operatory logiczne:</h3>
	<p>Warunki można łączyć za pomocą operatorów logicznych:</p>
	<ul class="ml-5 list-disc space-y-1 text-sm text-slate-300">
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">and</span> — obydwa warunki muszą być spełnione
		</li>
		<li>
			<span class="bg-gray-800 p-0.5 text-gray-400">or</span> — jeden z warunków musi być spełniony
		</li>
		<li><span class="bg-gray-800 p-0.5 text-gray-400">not</span> — neguje warunek</li>
	</ul>
	<p class="text-sm text-slate-400">
		Operator <span class="bg-gray-800 p-0.5 text-gray-400">not</span>,
		<span class="bg-gray-800 p-0.5 text-gray-400">and</span>
		i <span class="bg-gray-800 p-0.5 text-gray-400">or</span> mają taki sam priorytet — używaj
		nawiasów
		<span class="bg-gray-800 p-0.5 text-gray-400">( )</span>, by jasno określić kolejność.
	</p>

	<h3>📂 Więcej przykładów:</h3>
	<SfmCodeArea program_link="/sfm/if/04-combined.sfm" />
	<SfmCodeArea program_link="/sfm/if/05-else-if.sfm" />

	<h3 class="mt-4">📌 Dobre praktyki:</h3>
	<ul class="ml-5 list-disc space-y-1 text-sm text-slate-300">
		<li>Używaj jasnych warunków i dodawaj komentarze, by kod był czytelny.</li>
		<li>
			Grupuj warunki nawiasami <span class="bg-gray-800 p-0.5 text-gray-400">( )</span> dla bezpieczeństwa
			i przejrzystości.
		</li>
		<li>
			Zawsze zamykaj blok <span class="bg-gray-800 p-0.5 text-gray-400">IF</span> słowem
			<span class="bg-gray-800 p-0.5 text-gray-400">END</span>.
		</li>
	</ul>

	<div class="mt-6 flex justify-between">
		<SectorButton left href={data.navigation?.left?.href}>
			{data.navigation?.left?.value}
		</SectorButton>
		<SectorButton right href={data.navigation?.right?.href}>
			{data.navigation?.right?.value}
		</SectorButton>
	</div>
</ResponsiveContainer>

<svelte:head>
	<title>SFM - Warunki logiczne</title>
	<meta name="description" content="Strona glowna mojej strony" />
</svelte:head>
