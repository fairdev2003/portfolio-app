<script>
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';
	import PageNavigator from '../blog/(components)/PageNavigator.svelte';
</script>

<ResponsiveContainer cols="2" className="flex flex-col gap-y-5 col-span-2">
	<h2 class="text-white">🎇 Rozdanie i fajerwerki</h2>

	<p>Hejo z tej strony Klimson. Ten prawdziwy klimson.</p>

	<p>
		Ogolnie rzecz biorac strona jest glownie zasluga tego ze musialem zrobic projekt na technologie
		webowe na uczelnie, ale z uwagi na to ze zbyt duzo sie dzieje ostatnio u mnie postanowilem ta
		sekcje wykorzystac jako moj publiczny pamietnik, ktory rowwniez posluzy na pewnym etapie
		zrozumiec mnie i moje mechanizmy ktore mna kierowaly przez ten caly czas
	</p>

	<p>
		Nie jest to miejsce na osady czy to mnie czy innych ludzi. Jest to swoiste rozpaczanie etapu
		samoswiadomosci gdzie moge sam siebie uleczyc. Bedzie tez to mysle bardzo wazna sekcja dla
		psychoterapeuty, ktorego mam za niedlugo. Nie wstydze sie tych moich zachowan absolutnie wiec
		mysle ze dobrym etapem jest podzielenie sie osobom ktore sa na tem stronie obecne tym co dzialo
		sie zlego w moi zyciu i co sobie ustalilem. Tez po czesci uwazam ze dla niektorych osob z
		podobnym problemem bedzie to fajna strona do autorefleksji i przemyslenia wlasnych zachowan i
		mam nadzieje ze komus pomoge wyjsc z tego dolku psychicznego, gdzie wszystko wydaje sie zbyt
		ciezkie.
	</p>

	<h2>Duszyczko nie jestes sama</h2>

	<PageNavigator right={{ href: '/lore/igniter', value: 'Zapalnik' }} />
</ResponsiveContainer>

<style>
	.text {
		opacity: 85%;
	}
</style>
