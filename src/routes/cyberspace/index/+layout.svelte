<script lang="ts">
	import GeocitiesButton from '../components/GeocitiesButton.svelte';
	import CyberspaceSidebar from '../components/sidebar/CyberspaceSidebar.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col h-screen overflow-hidden p-10 windows mx-auto items-center">
	<div
		class="border flex flex-col border-blue-900 items-start p-2 bg-neutral-900/50 shrink-0 w-full"
	>
		<img
			src="https://api.klimson.dev/interface/bucket/klimson.dev/cyberspace/burningretroklimson.gif"
		/>

		<div class="flex gap-4 p-2">
			<a class="windows underline" href="/cyberspace/index/">home</a>
			<a class="windows underline" href="/cyberspace/index/games">games</a>
			<a class="windows underline" href="/cyberspace/index/archives">archives</a>
			<a class="windows underline" href="/cyberspace/index/links">links</a>
			<a class="windows underline" href="/cyberspace/index/guestbook">guestbook</a>
			<a class="windows underline" href="/cyberspace/index/projects">projects</a>
		</div>
	</div>

	<!-- Środkowa siatka -->
	<div class="grid grid-cols-8 text-start flex-1 min-h-0 w-full">
		<section
			class="col-span-2 bg-neutral-900/50 border-blue-900 border border-t-0 border-b-0 h-full overflow-y-auto"
		>
			<CyberspaceSidebar />
		</section>
		<section
			class="col-span-6 p-3 bg-neutral-900/50 border-r w-full flex border-blue-900 border-l-0 justify-center overflow-y-auto h-full"
		>
			{@render children()}
		</section>
	</div>

	<div class="border flex justify-center border-blue-900 bg-neutral-900/50 w-full shrink-0">
		<div class="flex gap-1 items-center">
			<a href="https://webring.dinhe.net/prev/https://klimson.dev/cyberspace/index">
				<img src="https://gifcities.org/static/gifsearch/arrowleft.gif" alt="" class="size-8" />
			</a>

			<p>Retronaut Webring</p>
			<a href="https://webring.dinhe.net/next/https://klimson.dev/cyberspace/index">
				<img src="https://gifcities.org/static/gifsearch/arrowright.gif" alt="" class="size-8" />
			</a>
		</div>
	</div>
</div>

<svelte:head>
	<title>Retrospace | Links</title>
	<meta name="description" content="Retro View!" />
	<meta name="viewport" content="width=1024" />
</svelte:head>

<style>
	p,
	.windows {
		font-family: 'WindowsRegular';
		text-align: center;
	}
</style>
