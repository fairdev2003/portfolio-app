<script>
	import TechnologyStackItem from '../../../components/TechnologyStackItem.svelte';
</script>

<div class="flex flex-col gap-5 justify-center">
	<div class="flex flex-col gap-1">

		<div class="flex items-center gap-4">
			<h2>Stack technologiczny</h2>
			<div class="bg-gray-500 h-0.5 flex-1"></div>
		</div>
		<p class="text-gray-500 font-[500]">Na przestrzeni lat ten stack technologiczny cały czas się rozwijał. Moje pierwsza styczność z programowaniem miała miejsce gdy dołączyłem do projektu gry na Roblox. Nigdy nie sądziłem ze zaczne tworzyć tak prężnie strony internetowe.</p>
	</div>
	<!--Stack items-->
	<div class="flex flex-wrap gap-3">
		<TechnologyStackItem src="Lua.svg" stack_name="Lua"/>
		<TechnologyStackItem src="Java.svg" stack_name="Java"/>
		<TechnologyStackItem src="Python.svg" stack_name="Python"/>
		<TechnologyStackItem src="HTML5.svg" stack_name="HTML5"/>
		<TechnologyStackItem src="CSS3.svg" stack_name="CSS3"/>
		<TechnologyStackItem src="Bootstrap.svg" stack_name="Bootstrap"/>
		<TechnologyStackItem src="JavaScript.svg" stack_name="Javascript"/>
		<TechnologyStackItem src="TypeScript.svg" stack_name="Typescript"/>
		<TechnologyStackItem src="React.svg" stack_name="React"/>
		<TechnologyStackItem src="Node.js.svg" stack_name="Node.js"/>
		<TechnologyStackItem src="MySQL.svg" stack_name="MySQL"/>
		<TechnologyStackItem src="Express.svg" stack_name="Express" imageStyle="invert"/>
		<TechnologyStackItem src="Tailwind-CSS.svg" stack_name="TailwindCSS"/>
		<TechnologyStackItem src="Next.js.svg" stack_name="Next.js" imageStyle="invert"/>
		<TechnologyStackItem src="Figma.svg" stack_name="Figma"/>
		<TechnologyStackItem src="Git.svg" stack_name="Git"/>
		<TechnologyStackItem src="Go.svg" stack_name="Go"/>
		<TechnologyStackItem src="Redux.svg" stack_name="Redux"/>
		<TechnologyStackItem src="Docker.svg" stack_name="Docker"/>
		<TechnologyStackItem src="Electron.svg" stack_name="Electron"/>
		<TechnologyStackItem src="MongoDB.svg" stack_name="MongoDB"/>
		<TechnologyStackItem src="Flutter.svg" stack_name="Flutter"/>
		<TechnologyStackItem src="Dart.svg" stack_name="Dart"/>
		<TechnologyStackItem src="Svelte.svg" stack_name="Svelte"/>
	</div>
	<h3>Technologie wykorzystane do stworzenia tej strony</h3>
	<div class="flex flex-wrap gap-3">
		<TechnologyStackItem src="Svelte.svg" stack_name="SvelteKit"/>
		<TechnologyStackItem src="HTML5.svg" stack_name="HTML5"/>
		<TechnologyStackItem src="CSS3.svg" stack_name="CSS3"/>
		<TechnologyStackItem src="TypeScript.svg" stack_name="Typescript"/>
		<TechnologyStackItem src="Tailwind-CSS.svg" stack_name="TailwindCSS"/>
	</div>
	<p class="font-[500]">Zobacz także <a href="/projects">Projekty</a></p>
</div>