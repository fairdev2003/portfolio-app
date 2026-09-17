<script lang="ts">
	import GeocitiesButton from '../components/GeocitiesButton.svelte';
	import CyberspaceSidebar from '../components/sidebar/CyberspaceSidebar.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col h-dvh p-5 overflow-hidden windows w-full">
	<div class="border flex flex-col border-blue-900 items-start p-2 bg-neutral-900/50 shrink-0">
		<p class="font-bold text-2xl text-start">Cyber Klimson</p>

		<div class="flex gap-4 p-2">
			<a class="windows" href="/cyberspace/index/">home</a>
			<a class="windows" href="/cyberspace/index/games">games</a>
			<a class="windows" href="/cyberspace/index/archives">archives</a>
			<a class="windows" href="/cyberspace/index/links">links</a>
			<a class="windows" href="/cyberspace/index/guestbook">guestbook</a>
			<a class="windows" href="/cyberspace/index/projects">projects</a>
		</div>
	</div>

	<div class="grid grid-cols-8 text-start flex-1 min-h-0">
		<section
			class="col-span-2 bg-neutral-900/50 border-blue-900 border border-t-0 border-b-0 h-full overflow-y-auto"
		>
			<CyberspaceSidebar />
		</section>
		<section
			class="col-span-6 p-3 bg-neutral-900/50 border-r w-full flex border-blue-900 justify-center overflow-y-auto h-full"
		>
			{@render children()}
		</section>
	</div>

	<div class="border flex p-2 justify-center border-blue-900 bg-neutral-900/50">
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

<style>
	p,
	.windows {
		font-family: 'WindowsRegular';
		text-align: center;
	}
</style>
