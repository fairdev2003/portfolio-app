<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	import '../scrollbar.css';
	import SpotifyStatus from '../components/SpotifyStatus.svelte';
	import { onMount } from 'svelte';
	let { children } = $props();
</script>

<section>
	<div class="mx-auto max-w-6xl px-5 lg:px-10">
		<PageHeader />
		<div class="w-full md:flex md:flex-col md:justify-center lg:grid lg:grid-cols-4">
			<!--Navigation-->

			<div class="col-span-1">
				<!-- TODO: PERFORMANCE -->
				<SpotifyStatus responsiveState="desktop" />
				<Navigation />
			</div>

			<!--Index Page-->
			<div class="col-span-3 lg:px-5">
				{@render children()}
			</div>
		</div>
	</div>
	<Footer />
</section>
