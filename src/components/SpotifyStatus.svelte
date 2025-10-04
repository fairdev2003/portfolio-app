<script lang="ts">
	import { klimsonApp } from '$lib';
	import { gsap } from 'gsap';
	import { onMount, tick } from 'svelte';
	import SpotifySVG from '../assets/spotify.png';

	onMount(async () => {
		await klimsonApp.zamontujKurwe();
	});

	$effect(() => {
		const spotifySong = klimsonApp.spotify;
		if (!spotifySong && modalEl) {
			closeModal();
		}
	});

	type Props = {
		responsiveState: 'desktop' | 'mobile';
	};

	let musicInfoModalOpenState: boolean = $state(false);
	let modalEl: HTMLDivElement;
	let modalContentEl: HTMLDivElement;

	function closeModal() {
		gsap.to(modalContentEl, {
			opacity: 0,
			scale: 0.9,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => {
				musicInfoModalOpenState = false;
			}
		});

		gsap.to(modalEl, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in'
		});
	}

	async function openModal() {
		musicInfoModalOpenState = true;

		await tick();

		gsap.fromTo(modalEl, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.in' });

		gsap.fromTo(
			modalContentEl,
			{ opacity: 0, scale: 0.9 },
			{
				opacity: 1,
				scale: 1,
				delay: 0.3,
				duration: 0.4,
				ease: 'back.out(1.7)'
			}
		);
	}

	const { responsiveState = 'desktop' }: Props = $props();
</script>

{#if klimsonApp.spotify}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onclick={() => {
			openModal();
		}}
		class={`mb-3 cursor-pointer items-center gap-2 border border-neutral-800/60 bg-neutral-900/60  p-3 backdrop-blur-xl transition-colors select-none hover:bg-neutral-700  ${responsiveState == 'desktop' ? 'hidden lg:flex' : 'flex lg:hidden'}`}
	>
		<img class="h-14 w-14 rounded-lg" src={klimsonApp.spotify?.album_art_url} alt="Album cover" />
		<div
			class={`flex ${responsiveState == 'desktop' ? 'w-9/10' : 'w-full'} w-full flex-col gap-0.5`}
		>
			<div class="flex flex-col">
				<p class="text-[14px] font-semibold">{klimsonApp.spotify?.song}</p>
				<p class="text-[11px] text-white">{klimsonApp.spotify?.artist.replaceAll(';', ', ')}</p>
				<div class={responsiveState == 'desktop' ? 'w-full' : 'w-full'}>
					{@render ProgressBar()}
				</div>
				<div
					class={`mt-1 flex ${responsiveState == 'desktop' ? 'w-full' : 'w-full'} justify-between font-semibold`}
				>
					<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.progress)}</p>
					<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.duration)}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if musicInfoModalOpenState}
	{@render Modal()}
{/if}

{#snippet ProgressBar(className?: string)}
	{#if klimsonApp.duration > 0}
		<div class={`mt-1 h-0.5 rounded bg-white/30 ${className}`}>
			<div
				class="h-full bg-white transition-all duration-500 ease-linear"
				style="width: {(klimsonApp.progress / klimsonApp.duration) * 100}%"
			></div>
		</div>
	{/if}
{/snippet}

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#snippet Modal()}
	<script lang="ts">
	</script>

	<!-- Modal backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->

	<div
		onclick={() => closeModal()}
		class={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-neutral-950 ${responsiveState === 'mobile' && 'pb-10'}`}
	>
		<!-- Modal content -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={modalEl}
			class="white w-11/12 rounded-lg border-2 border-neutral-700 bg-neutral-800 bg-gradient-to-r shadow-2xl backdrop-blur-3xl sm:w-3/4 md:w-1/2 lg:w-1/3"
		>
			<!-- Header -->

			<!-- Body -->

			<div
				bind:this={modalContentEl}
				class="modal-content relative flex w-full gap-5 p-6 text-white"
			>
				{#if klimsonApp.spotify?.song}
					<img
						class="size-20 rounded-lg"
						src={klimsonApp.spotify?.album_art_url}
						alt="Album cover"
					/>
				{/if}
				<div class="relative flex w-full flex-col">
					{#if klimsonApp.spotify?.song}
						<img class="absolute top-16 -left-9 size-6" src={SpotifySVG} alt="spotify" />
					{/if}
					<!-- svelte-ignore a11y_missing_attribute -->
					{#if klimsonApp.spotify?.song}
						<a class="flex cursor-pointer items-center gap-1 font-bold">
							{klimsonApp.getSong()}
						</a>
					{/if}

					{#if klimsonApp.spotify?.song}
						<p class="font-sm mb-1 text-sm text-gray-400">
							{klimsonApp.getArtist()?.replaceAll(';', ',')}
						</p>
					{/if}
					{#if klimsonApp.spotify?.song}
						<div>
							{@render ProgressBar()}
						</div>
					{/if}
					{#if klimsonApp.spotify?.song}
						<div class="mt-1 flex justify-between font-semibold">
							<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.progress)}</p>
							<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.duration)}</p>
						</div>
					{/if}
				</div>
				<!-- {#if klimsonApp.spotify?.song}
					<div
						onclick={() => closeModal()}
						class="absolute top-5 right-4 cursor-pointer rounded-full p-1 transition-colors hover:bg-white/30"
					>
						<X className="" />
					</div>
				{/if} -->
			</div>

			<!-- Footer -->
		</div>
	</div>
{/snippet}

<style>
	a {
		color: white;
		background-color: transparent;
		padding: 0 0 0 0;
	}
</style>
