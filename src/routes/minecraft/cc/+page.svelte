<script lang="ts">
	import BlogHeading from '../../../components/blog/BlogHeading.svelte';
	import Heading from '../../../components/typography/Heading.svelte';
	import Paragraph from '../../../components/typography/Paragraph.svelte';
</script>

<div class="flex flex-col gap-4">
	<BlogHeading
		title="ComputerCraft"
		author="Klimson"
		readingTime={5}
		tags={['PROGRAMOWANIE', 'MINECRAFT', 'COMPUTERCRAFT', 'RETRO']}
		authorImageUrl="https://api.klimson.dev/interface/bucket/random/klimson-chill.jpeg"
		publishDate={new Date('07-19-2026')}
	/>
	<div class="flex flex-col gap-2">
		<Paragraph class="text-white"
			>Mod <b>ComputerCraft</b> ( <a href="https://tweaked.cc/">CC:Tweaked</a> ) to nowoczesna
			modyfikacja do gry Minecraft stworzona z myślą o integracji świata gry z językiem
			programowania. Mod jest oparty na języku
			<a href="https://www.lua.org/">Lua</a>, który jest stworzony z myślą o prostych skryptach do
			gier. Dzięki różnym dodatkom mod CC:Tweaked może zrobić zdecydowanie więcej.</Paragraph
		>

		<Paragraph class="text-white">
			Mod działa wewnątrz komputerów. Każdy komputer ma swoje unikalne ID, do którego można sie
			połączyc przy pomocy websocketa z komputera i edytować zdalnie treść komputera (edytować
			foldery, pliki, usuwać pliki etc). Skrypty z danego komputera znajduje sie w <span
				class="rounded-full bg-blue-800/60 p-0.5 px-1.5 text-blue-400"
				>New World {'>'} computercraft {'>'} id_komputera</span
			>
			Można również skorzystać z wbudowanej komendy
			<span class="rounded-full bg-blue-800/60 p-0.5 px-1.5 text-blue-400">pastebin</span>, która
			pozwala na importowanie kodu z platformy <a href="https://pastebin.com">pastebin.com</a>
		</Paragraph>
		<img src="https://api.klimson.dev/interface/bucket/klimson.dev/cc/computer.png" />

		<Paragraph
			>Sam mod w sobie oferuje moduł <b>hhtp</b>, dzięki któremu można integrować program w świecie
			gry z zęwnetrznym serwisem zaprojektowanym przez użytkownika</Paragraph
		>
	</div>
	<img src="https://api.klimson.dev/interface/bucket/klimson.dev/computer-2026-07-18_22-50.gif" />
</div>
