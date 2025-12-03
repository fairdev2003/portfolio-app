<script lang="ts">
	import { klimsonApp } from '$lib';
	import { gsap } from 'gsap';
	import { onMount, tick } from 'svelte';
	import SpotifySVG from '../assets/spotify-2.svg';
	import SpotifyPNG from '../assets/spotify.png';
	import Paragraph from './typography/Paragraph.svelte';

	onMount(async () => {
		await klimsonApp.zamontujKurwe();
	});

	$effect(() => {
		const spotifySong = klimsonApp.spotify;
		if (!spotifySong && modalEl) {
			closeModal();
		}
	});

	function timeAgo(dateInput: string | Date): string {
		const date = new Date(dateInput);
		const now = new Date();
		const diffMs = now.getTime() - date.getTime(); // różnica w milisekundach
		const diffSec = Math.floor(diffMs / 1000);
		const diffMin = Math.floor(diffSec / 60);
		const diffHr = Math.floor(diffMin / 60);
		const diffDay = Math.floor(diffHr / 24);

		if (diffSec < 60) return 'kilka sekund temu';
		if (diffMin < 60) return `${diffMin} ${plural(diffMin, 'minutę', 'minuty', 'minut')} temu`;
		if (diffHr < 24) return `${diffHr} ${plural(diffHr, 'godzinę', 'godziny', 'godzin')} temu`;
		if (diffDay === 1) return 'wczoraj';
		if (diffDay < 30) return `${diffDay} ${plural(diffDay, 'dzień', 'dni', 'dni')} temu`;
		if (diffDay < 365) {
			const months = Math.floor(diffDay / 30);
			return `${months} ${plural(months, 'miesiąc', 'miesiące', 'miesięcy')} temu`;
		}

		const years = Math.floor(diffDay / 365);
		return `${years} ${plural(years, 'rok', 'lata', 'lat')} temu`;
	}

	function plural(value: number, one: string, few: string, many: string): string {
		const mod10 = value % 10;
		const mod100 = value % 100;
		if (value === 1) return one;
		if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return few;
		return many;
	}

	type Props = {
		responsiveState?: 'desktop' | 'mobile';
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
				document.body.style.overflow = 'auto';
			}
		});

		gsap.to(modalEl, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in'
		});
	}

	async function openModal() {
		document.body.style.overflow = 'hidden';
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

	<Paragraph class="my-3 mt-6 text-green-500">▶ Słucham teraz Spotify.</Paragraph>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onclick={() => {
			openModal();
		}}
		class={`relative mx-auto mb-3 flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl border border-neutral-700/60 object-center transition-all select-none 	hover:bg-neutral-700/70 active:bg-neutral-700/70 md:w-3/4 lg:w-full`}
	>
		<img class="absolute -z-1 scale-100" src={klimsonApp.getAlbumCover()} alt="alum" />
		<!-- <img class="absolute -z-3 scale-50 blur-xl" src={klimsonApp.getAlbumCover()} alt="alum" /> -->

		<div
			class={`flex ${responsiveState == 'desktop' ? 'w-9/10' : 'w-full'} w-full flex-col gap-0.5`}
		>
			<div class="m-5 my-7 flex flex-col">
				<div class="mb-4 flex justify-between">
					<img class="top-16 -left-9 size-6" src={SpotifySVG} alt="spotify" />
				</div>
				<p class="text-[15px] font-semibold">{klimsonApp.spotify?.song}</p>
				<p class="text-[13px] text-white">{klimsonApp.spotify?.artist.replaceAll(';', ', ')}</p>
				<div class="mt-1 flex items-center gap-3">
					<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.progress)}</p>
					{@render ProgressBar('w-ful	l w-full')}
					<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.duration)}</p>
				</div>
				<div
					class={`mt-1 flex ${responsiveState == 'desktop' ? 'w-full' : 'w-full'} justify-between font-semibold`}
				></div>
			</div>
		</div>
	</div>
{:else}
	<Paragraph class="my-3 mt-6 text-green-500">▶ Czego słuchałem na Spotify wcześniej.</Paragraph>
	<div
		class={`relative mb-3 flex items-center gap-4 border border-neutral-700/60 bg-neutral-800/60 p-3 py-5 transition-colors`}
	>
		<img
			class="h-14 w-14 rounded-lg"
			src="https://i.scdn.co/image/ab67616d0000b2737fc8e0f4ddf8eaefbd2a0f7e"
			alt="Album cover"
		/>
		<div
			class={`flex ${responsiveState == 'desktop' ? 'w-9/10' : 'w-full'} w-full flex-col gap-0.5`}
		>
			<div class="flex flex-col">
				<p class="text-[14px] font-semibold">JAKI PROBLEM</p>

				<p class="text-[11px] text-white">Guzior</p>
				<p class="text-[11px] text-green-500">{timeAgo('2025/12/03 11:15:00')}</p>
			</div>
		</div>
	</div>
{/if}

{#if musicInfoModalOpenState}
	{@render Modal()}
{/if}

{#snippet ProgressBar(className?: string)}
	{#if klimsonApp.duration > 0}
		<div class={`h-1 w-auto rounded-full bg-white/30 ${className}`}>
			<div
				class="h-full rounded-full bg-green-400 transition-all duration-500 ease-linear"
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
		class={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-neutral-950/90 backdrop-blur-md ${responsiveState === 'mobile' && 'pb-10'}`}
	>
		<!-- Modal content -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
			bind:this={modalEl}
			class="white w-11/12 border border-neutral-700/60 bg-neutral-800/60 bg-gradient-to-r shadow-2xl backdrop-blur-3xl sm:w-3/4 md:w-1/2 lg:w-1/3"
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
						<img class="absolute top-16 -left-9 size-6" src={SpotifyPNG} alt="spotify" />
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

<svelte:window
	onkeydown={(a) => {
		if (a.key === 'Escape') {
			closeModal();
		}
	}}
/>

<style>
	a {
		color: white;
		background-color: transparent;
		padding: 0 0 0 0;
	}
</style>
