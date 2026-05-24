<script lang="ts">
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import Heading from '../../components/typography/Heading.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';

	const a = [
		'Problemy z koncentracją i poprawnym formułowaniem zdań.',
		'Trudności ze zrozumieniem wypowiedzi innych osób (zdarzało mi się przytakiwać, nie rozumiejąc treści, co skutkowało utratą pracy).',
		'Wycofanie społeczne – kontakty z ludźmi są męczące.',
		'Poczucie wstydu z powodu własnego istnienia, trudności w nawiązywaniu rozmów.',
		'Agonia – brak przyjemności z czynności, które wcześniej sprawiały radość (programowanie, gry, spotkania).',
		'Częste wyręczanie się innymi w codziennych obowiązkach z braku sił.',
		'Poczucie bycia "życiową porażką".',
		'Kompulsywne zachowania seksualne (masturbacja 3-4 razy dziennie) jako desperacka próba dostarczenia mózgowi dopaminy.'
	];

	const b = [
		'Wysoka pewność siebie i wiara w słuszność swoich racji.',
		'Zwiększona towarzyskość (zagadywanie nieznajomych, gadatliwość w kontaktach ze starymi znajomymi).',
		'Przejmowanie się mniejszą liczbą rzeczy.',
		'Poczucie kreatywności – szybkie łączenie wątków, abstrakcyjne myślenie, poczucie bycia "filozofem".',
		'Uwielbienie dla procesu myślenia – czerpanie głębokiej satysfakcji z intelektualnych analiz.',
		'Brak libido (zupełne przeciwieństwo stanu depresyjnego).',
		'Impulsywność w wypowiedziach (trudność w kontrolowaniu tego, co mówię).',
		'Skłonność do konfliktów (przeklinanie, kłótnie, np. z osobami z pracy).',
		'Silne emocje, często trudne do zrozumienia.',
		'Sprzeczne nastroje: w myślach mieszam kogoś z błotem, by następnego dnia mieć zupełnie inne podejście.',
		'Intensywna potrzeba konfrontacji: podczas pierwszego epizodu towarzyszyło mi silne, destrukcyjne pragnienie zrujnowania komuś życia.',
		'Strach przed spadkiem nastroju ("górki") i mechanizm obronny polegający na "napędzaniu się", by nie wrócić do depresji.',
		'Poczucie derealizacji (stan "za szybą") pojawiające się w specyficznych warunkach.',
		'Objawy fizyczne w stanie podwyższonego nastroju: podwyższone ciśnienie (np. 140/80).',
		'Górka często wywoływana przez zarwaną noc, ale nie jest to regułą.',
		'Pojawiające się wahania wewnątrz samego okresu "górki" (kilkudniowe spadki nastroju, po których następuje ponowny wystrzał energii).',
		'Dziwne sny, które wydają się istotne dla mojego stanu psychicznego.',
		'Pojawienie się omamów przed snem przy deficycie snu (obrazy w głowie przenikające do rzeczywistości, np. twarze, postacie).',
		'Stan głębokiej, nienaturalnej ciszy w głowie podczas epizodów z omamami, kontrastujący z natłokiem myśli.',
		'Pierwszy epizod wystąpił po traumatycznym zerwaniu kontaktu z bliską osobą z borderline.'
	];
</script>

{#snippet S(s: string)}
	<!-- Zmieniono text-md na text-lg dla większej czcionki -->
	<li class="p-3 text-lg shadow-sm transition-transform">{s}</li>
{/snippet}

<div>
	<div class="flex flex-col gap-5">
		<div class="flex flex-col">
			<Heading>Elza</Heading>
			<ul class="flex list-inside list-disc flex-col">
				{#each a as objaw}
					{@render S(objaw)}
				{/each}
			</ul>
		</div>

		<div class="flex flex-col gap-5">
			<Heading>Ania</Heading>
			<ul class="flex list-inside list-disc flex-col">
				{#each b as objaw}
					{@render S(objaw)}
				{/each}
			</ul>
		</div>

		<Heading>Sen 1</Heading>
		<p class="text-lg">
			Grałeś ze starszym człowiekiem w grę, w której musieliście uciekać przed goniącymi Was
			zombiakami. Waszym jedynym ratunkiem było wchodzenie po schodach bloku mieszkalnego. Zawsze
			jednak przegrywaliście, ponieważ budynek był niedokończony i schody nagle się urywały.
			Dodatkowo, przy wejściu do bloku (koło ściany) stała wielka, przerażająca ośmiornica, która
			paraliżowała Cię i utrudniała ucieczkę. Czułeś, że mimo konwencji gry, ta ucieczka dzieje się
			naprawdę i walczysz o własne życie.
		</p>

		<Heading>Sen 2</Heading>
		<p class="text-lg">
			Wchodzisz do budynku call center, gdzie na początku wszystko wygląda normalnie. Nagle pani z
			recepcji (lub Twoja koordynatorka) zadaje Ci pytanie: „Uważasz, że jestem brzydka?” (lub pyta,
			czy „poczekasz do maja”). W tym momencie twarze wszystkich ludzi wokół zamieniają się w jej
			twarz - każdy ma tę samą twarz, mimo innego ubioru. Przerażony uciekasz z budynku, a ta
			kobieta goni Cię rozpędzonym samochodem, pytając: „Nie jestem cudowna? Nie jestem piękna?”.
			Najbardziej uderzające było to, że nikt na ulicy nie reagował na to śmiertelne zagrożenie -
			ludzie prowadzili zwyczajne, codzienne życie, podczas gdy Ty uciekałeś przed autem. Samochód
			ostatecznie w Ciebie nie trafił, bo uciekałeś.
		</p>
	</div>
</div>

<style>
	li,
	p {
		font-family: 'Georgia', serif;
	}
</style>
