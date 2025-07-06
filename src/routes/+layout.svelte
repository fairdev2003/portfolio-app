<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	import '../scrollbar.css';
	import DiscordActivityPill from '../components/discord/DiscordActivityPill.svelte';
	let { children } = $props();
</script>

<section>
	<div class="my-5 h-5 bg-purple-600"></div>

	<div class="mx-auto max-w-6xl px-5 lg:px-10">
		<PageHeader />
		<div class="w-full md:flex md:flex-col md:justify-center lg:grid lg:grid-cols-4">
			<!--Navigation-->

			<div class="col-span-1">
				<DiscordActivityPill />
				<Navigation />
			</div>

			<!--Index Page-->
			<div class="col-span-3">
				{@render children()}
			</div>
		</div>
	</div>
	<Footer />
</section>
