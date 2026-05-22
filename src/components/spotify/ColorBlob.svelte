<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	type Props = {
		baseColor?: string;
	};

	let { baseColor = '#1db954' }: Props = $props();

	let blob1 = $state<HTMLDivElement | null>(null);
	let blob2 = $state<HTMLDivElement | null>(null);
	let blob3 = $state<HTMLDivElement | null>(null);

	function adjustColorBrightness(hex: string, percent: number): string {
		const num = parseInt(hex.replace('#', ''), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			G = ((num >> 8) & 0x00ff) + amt,
			B = (num & 0x0000ff) + amt;
		return `#${(0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255)).toString(16).slice(1)}`;
	}

	let colorSecondary = $derived(adjustColorBrightness(baseColor, -20));
	let colorAccent = $derived(adjustColorBrightness(baseColor, 30));

	onMount(() => {
		const blobs = [blob1, blob2, blob3];

		blobs.forEach((blob, index) => {
			if (!blob) return;

			// Zwiększony zasięg ruchu (random), dopasowany do większych gabarytów blobów
			gsap.to(blob, {
				x: 'random(-70, 70)',
				y: 'random(-50, 50)',
				scale: 'random(0.9, 1.3)',
				rotation: 'random(-180, 180)',
				duration: `random(${7 + index * 2}, ${11 + index * 2})`,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',

				onRepeat: function () {
					gsap.to(this.targets(), {
						x: 'random(-70, 70)',
						y: 'random(-50, 50)',
						scale: 'random(0.9, 1.3)',
						rotation: 'random(-180, 180)',
						duration: 'random(7, 12)',
						ease: 'sine.inOut'
					});
				}
			});
		});
	});
</script>

<div
	class="absolute inset-0 -z-1 flex size-full items-center justify-center overflow-hidden bg-neutral-950 text-white select-none"
	style:--base-color={baseColor}
	style:--secondary-color={colorSecondary}
	style:--accent-color={colorAccent}
>
	<div
		class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-50 mix-blend-screen blur-[55px] filter md:blur-[75px]"
	>
		<div
			bind:this={blob1}
			class="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--base-color)] opacity-85 mix-blend-screen md:size-[550px]"
			style="margin-left: -10%; margin-top: -5%;"
		></div>

		<div
			bind:this={blob2}
			class="absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary-color)] opacity-80 mix-blend-screen md:size-[580px]"
			style="margin-left: 12%; margin-top: 8%;"
		></div>

		<div
			bind:this={blob3}
			class="absolute top-1/2 left-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-color)] opacity-75 mix-blend-screen md:size-[450px]"
			style="margin-left: -2%; margin-top: -2%;"
		></div>
	</div>
</div>
