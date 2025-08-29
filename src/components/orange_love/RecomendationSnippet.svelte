<script lang="ts">
	import { onMount, tick } from 'svelte';
	import gsap from 'gsap';

	export let open = false;

	let modalEl: HTMLDivElement;

	function close() {
		gsap.to(modalEl, {
			opacity: 0,
			y: -50,
			duration: 0.3,
			onComplete: () => {
				open = false;
			}
		});
	}

	async function handleOpenModal() {
		open = true;
		await tick(); // poczekaj aż modal się wstawi do DOM
		gsap.fromTo(
			modalEl,
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
		);
	}
</script>

<div
	class="flex h-auto w-full items-center border-2 border-orange-800 bg-orange-600/80 px-1.5 text-sm text-orange-200"
>
	<div class="flex h-auto w-auto items-center">
		<div class="flex size-5 items-end bg-orange-400 px-1 pb-1">
			<div class="h-1 w-full bg-white"></div>
		</div>
	</div>
	<p class="m-1.5">
		Jestem dumnym użytkownikiem usług w Orange {'<3'}
	</p>
	<div>
		<span
			class="cursor-pointer underline select-none hover:text-white"
			onclick={() => {
				handleOpenModal();
			}}>Szczegóły</span
		>
	</div>
	{@render Modal()}
</div>

{#snippet Modal()}
	{#if open}
		<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-black">
			<div bind:this={modalEl} class="w-[90%] max-w-md bg-white p-6 shadow-lg">
				<h2 class="mb-2 text-xl font-bold">Work in progres...</h2>
				<p class="text-bla mb-4 text-sm">Work in progress....</p>
				<button
					onclick={() => close()}
					class="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
				>
					Zamknij
				</button>
			</div>
		</div>
	{/if}
{/snippet}
