<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	let rotate = 0;
	let fill = 0; // 0 = puste, 1 = pełne
	let direction = 1; // 1 = wypełnia od góry, -1 = od dołu
	let interval: any;

	const animate = () => {
		interval = setInterval(() => {
			// Obrót o 180°
			rotate += 180;

			// Zmieniamy kierunek wypełnienia
			

			// Wypełniamy kwadrat podczas zatrzymania
			fill = 1;

			// Po wypełnieniu resetujemy
			setTimeout(() => fill = 0, 700); // wypełnienie trwa 700ms
		}, 1500); // pełen cykl co 1.5s
	};

	onMount(() => {
		animate();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="loader-container">
	<div
		class="loader-square"
		style="transform: rotate({rotate}deg); justify-content: {direction === 1 ? 'flex-start' : 'flex-end'};"
	>
		<div class="loader-fill" style="height: {fill * 100}%"></div>
	</div>
</div>

<style>
	.loader-container {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader-square {
		position: relative;
		width: 60px;
		height: 60px;
		border: 5px solid orange;
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		transition: transform 0.8s ease, justify-content 0.3s ease;
	}

	.loader-fill {
		width: 100%;
		background-color: orange;
		transition: height 0.7s ease; /* animacja wypełnienia */
	}
</style>
