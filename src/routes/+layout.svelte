<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	let { children } = $props();
</script>

<section>

	<div class="bg-purple-600 h-5 my-5">

	</div>

	<div class="max-w-6xl mx-auto lg:px-10 px-5">

	<PageHeader/>
		<div class="lg:grid lg:grid-cols-4 md:flex md:flex-col md:justify-center w-full">


			<!--Navigation-->

			<div class="col-span-1">
				<Navigation/>
			</div>

			<!--Index Page-->
			<div class="col-span-3">
				{@render children()}
			</div>
		</div>
	</div>
	<Footer/>


</section>

