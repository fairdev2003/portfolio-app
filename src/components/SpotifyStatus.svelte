<script lang="ts">
	import { klimsonApp } from '$lib';
	import { gsap } from 'gsap';
	import { X } from 'lucide-svelte';
	import { onMount, tick } from 'svelte';

	onMount(async () => {
		await klimsonApp.onComponentMount();
	});

	type Props = {
		mobile?: boolean;
		desktop?: boolean;
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

	const { mobile = false, desktop = true }: Props = $props();
</script>

{#if klimsonApp.spotify}
	<p class="mx-2 mb-1 hidden text-[12px] font-semibold text-green-500 lg:flex"> SLUCHAM SPOTIFY</p>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onclick={() => {
			openModal();
		}}
		class="mr-4 mb-3 flex hidden cursor-pointer items-center gap-2 rounded-lg p-3 transition-colors select-none hover:bg-white/30 lg:flex"
	>
		<img class="h-14 w-14 rounded-lg" src={klimsonApp.spotify?.album_art_url} alt="Album cover" />
		<div class="flex w-9/10 w-full flex-col gap-0.5">
			<div class="flex flex-col">
				<p class="text-[14px] font-semibold">{klimsonApp.spotify?.song}</p>
				<p class="text-[11px] text-gray-400">{klimsonApp.spotify?.artist.replaceAll(';', ', ')}</p>
				<div class="w-9/10">
					{@render ProgessBar()}
				</div>
				<div class="mt-1 flex w-9/10 justify-between font-semibold">
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

{#snippet ProgessBar(className?: string)}
	{#if klimsonApp.duration > 0}
		<div class={`mt-1 h-[0.12rem] rounded bg-gray-700 ${className}`}>
			<div
				class="h-full bg-white transition-all duration-500 ease-linear"
				style="width: {(klimsonApp.progress / klimsonApp.duration) * 100}%"
			></div>
		</div>
	{/if}
{/snippet}

{#snippet Modal()}
	<script lang="ts">
	</script>

	<!-- Modal backdrop -->
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a1c]">
		<!-- Modal content -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={modalEl}
			class="white w-11/12 rounded-lg border-2 border-slate-700 bg-gradient-to-r from-slate-800 shadow-2xl sm:w-3/4 md:w-1/2 lg:w-1/3"
		>
			<!-- Header -->

			<!-- Body -->
			<div
				bind:this={modalContentEl}
				class="modal-content relative flex w-full gap-5 p-6 text-white"
			>
				<img
					class="h-20 w-20 rounded-lg"
					src={klimsonApp.spotify?.album_art_url}
					alt="Album cover"
				/>
				<div class="flex w-full flex-col">
					<h3 class="font-bold">{klimsonApp.getSong()}</h3>
					<p class="font-sm mb-1 text-sm text-gray-400">
						{klimsonApp.getArtist()?.replaceAll(';', ',')}
					</p>
					<div>
						{@render ProgessBar()}
					</div>
					<div class="mt-1 flex justify-between font-semibold">
						<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.progress)}</p>
						<p class="text-[11px]">{klimsonApp.formatMs(klimsonApp.duration)}</p>
					</div>
				</div>
				<div
					onclick={() => closeModal()}
					class="absolute top-5 right-4 cursor-pointer rounded-full p-1 transition-colors hover:bg-white/30"
				>
					<X className="" />
				</div>
			</div>

			<!-- Footer -->
		</div>
	</div>
{/snippet}
