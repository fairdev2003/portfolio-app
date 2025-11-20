<script lang="ts">
	import type { Snippet } from 'svelte';
	import SideBar from '../SideBar.svelte';
	import Navbar from '../Navbar.svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<div class="grid h-[100vh] grid-cols-12">
	<SideBar />
	<div class="col-span-8 flex flex-col p-5">
		<Navbar />
		<div class="mt-5">
			<h1 class="text-2xl font-bold">Hello Klimson!</h1>
			{@render children()}
		</div>
	</div>
	<div class="col-span-2 h-full bg-neutral-900 p-4"></div>
</div>
