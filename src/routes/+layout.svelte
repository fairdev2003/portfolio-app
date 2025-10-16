<script lang="ts">
	import '../app.css';
	import '../theme.css';
	import '../assets/georgia-2-webfont/style.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	import '../scrollbar.css';
	import SpotifyStatus from '../components/SpotifyStatus.svelte';
	import { onMount } from 'svelte';
	import HotlineWebring from '../components/HotlineWebring.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<section>
	{#if page.url.pathname.includes('/cyberspace')}
		{@render children()}
	{:else}
		<div class="dark mx-auto max-w-6xl px-5 lg:px-10">
			<PageHeader />
			<div class="w-full md:flex md:flex-col md:justify-center lg:grid lg:grid-cols-4">
				<!--Navigation-->

				<div class="col-span-1">
					<Navigation />
				</div>

				<div class="col-span-3">
					{@render children()}
				</div>
			</div>
		</div>
		<HotlineWebring />
		<Footer />
	{/if}
</section>
