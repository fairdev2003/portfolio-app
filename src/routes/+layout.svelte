<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<section>

	<div class="bg-purple-600 h-5 my-5">

	</div>

	<div class="max-w-6xl mx-auto py-10 lg:px-10 px-5">

	<header class="flex pb-10 items-center gap-1 select-none">
		<span class="text-green-500 text-2xl">{">"}</span><h1>Klimson <span class="code">_</span></h1>
	</header>
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

<style>
    @keyframes code_animation {
		25% {
						opacity: 0;
				}
				100% {
						opacity: 1;
				}

    }

		.code {
				animation-name: code_animation;
				animation-duration: 1s;
        animation-iteration-count: infinite;
		}
</style>