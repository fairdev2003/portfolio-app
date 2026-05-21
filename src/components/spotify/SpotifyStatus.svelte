<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount, tick } from 'svelte';
	import { spotifyApp } from './spotify.svelte';
	import Icon from '@iconify/svelte';

	onMount(async () => {
		await spotifyApp.zamontujKurwe();
	});

	$effect(() => {
		const spotifySong = spotifyApp.spotify;
		if (!spotifySong && modalEl) {
			closeModal();
		}
	});

	let playing: boolean = $state(false);

	function timeAgo(dateInput: string | Date): string {
		const date = new Date(dateInput);

		// Dodajemy dokładnie jedną godzinę do daty wejściowej
		date.setHours(date.getHours() + 1);

		const now = new Date();
		const diffMs = now.getTime() - date.getTime();

		const diffSec = Math.floor(diffMs / 1000);
		const diffMin = Math.floor(diffSec / 60);
		const diffHr = Math.floor(diffMin / 60);
		const diffDay = Math.floor(diffHr / 24);

		if (diffSec < 0) return 'przed chwilą'; // Zabezpieczenie, jeśli czas po zmianie wyjdzie w przyszłości
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

{#if spotifyApp.spotify && spotifyApp.getSong()}
	<p class="my-3 mt-6 text-green-500">▶ Słucham teraz Spotify.</p>
	{@const album_cover = spotifyApp.spotify.item?.album.images[0].url}
	<div
		onclick={() => {
			openModal();
		}}
		class={`relative mx-auto mb-3 flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl border border-neutral-700/60 object-center transition-all select-none hover:bg-neutral-700/70 active:bg-neutral-700/70 md:w-3/4 lg:w-full`}
	>
		<img class="absolute inset-0 h-full w-full object-cover" src={album_cover} alt="album" />

		<div class="absolute inset-0 bg-black/50"></div>

		<div
			class={`relative ${responsiveState == 'desktop' ? 'w-9/10' : 'w-full'} z-10 w-full flex-col gap-0.5`}
		>
			<div class="m-5 my-7 flex flex-col">
				<div class="mb-4 flex justify-between">
					<span class="size-6 text-green-500">
						<Icon icon="mdi:spotify" width="27" height="27" />
					</span>
					<span class="flex gap-1 rounded-md bg-green-700 p-1 px-2">
						<Icon icon="ic:round-smartphone" width="15" height="15" />
						<p class="text-xs text-neutral-200">{spotifyApp.spotify.device.name}</p>
					</span>
				</div>
				<p class="text-[15px] font-semibold text-white">{spotifyApp.getSong()}</p>
				<p class="text-[13px] text-gray-200">{spotifyApp.getArtist()?.replaceAll(';', ', ')}</p>
				<div class="mt-1 flex items-center gap-3">
					<p class="text-[11px] text-white">{spotifyApp.formatMs(spotifyApp.progress)}</p>
					{@render ProgressBar('w-full')}
					<p class="text-[11px] text-white">{spotifyApp.formatMs(spotifyApp.duration)}</p>
				</div>
				<div
					class={`mt-1 flex ${responsiveState == 'desktop' ? 'w-full' : 'w-full'} justify-between font-semibold`}
				></div>
			</div>
		</div>
	</div>
{/if}

{#if musicInfoModalOpenState}
	{@render Modal()}
{/if}

{#snippet ProgressBar(className?: string)}
	{#if spotifyApp.duration > 0}
		<div class={`h-1 w-auto rounded-full bg-white/30 ${className}`}>
			<div
				class="h-full rounded-full bg-green-400 transition-all duration-500 ease-linear"
				style="width: {(spotifyApp.progress / spotifyApp.duration) * 100}%"
			></div>
		</div>
	{/if}
{/snippet}

{#snippet Modal()}
	<div
		onclick={() => closeModal()}
		class={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-neutral-950/90 backdrop-blur-md ${responsiveState === 'mobile' && 'pb-10'}`}
	>
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
			bind:this={modalEl}
			class="white w-11/12 border border-neutral-700/60 bg-neutral-800/60 bg-gradient-to-r shadow-2xl backdrop-blur-3xl sm:w-3/4 md:w-1/2 lg:w-1/3"
		>
			<div
				bind:this={modalContentEl}
				class="modal-content relative flex w-full gap-5 p-6 text-white"
			>
				{#if spotifyApp.getSong() && spotifyApp.getAlbumCover()}
					<img class="size-20 rounded-lg" src={spotifyApp.getAlbumCover()!} alt="Album cover" />
				{/if}
				<div class="relative flex w-full flex-col">
					{#if spotifyApp.getSong()}{/if}
					{#if spotifyApp.getSong()}
						<a class="flex cursor-pointer items-center gap-1 font-bold">
							{spotifyApp.getSong()}
						</a>
					{/if}

					{#if spotifyApp.getSong()}
						<p class="font-sm mb-1 text-sm text-gray-400">
							{spotifyApp.getArtist()?.replaceAll(';', ',')}
						</p>
					{/if}
					{#if spotifyApp.getSong()}
						<div>
							{@render ProgressBar()}
						</div>
					{/if}
					{#if spotifyApp.getSong()}
						<div class="mt-1 flex justify-between font-semibold">
							<p class="text-[11px]">{spotifyApp.formatMs(spotifyApp.progress)}</p>
							<p class="text-[11px]">{spotifyApp.formatMs(spotifyApp.duration)}</p>
						</div>
					{/if}
				</div>
			</div>
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
		padding: 0;
	}
</style>
