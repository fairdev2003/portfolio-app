<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let textEl: HTMLSpanElement;
	let caretEl: HTMLSpanElement;

	onMount(() => {
		// migający kursor
		gsap.to(caretEl, {
			opacity: 0,
			duration: 0.6,
			repeat: -1,
			yoyo: true,
			ease: 'none'
		});

		// efekt pisania tekstu
		const text = 'Cześć, jestem Kuba 👋';
		textEl.textContent = '';

		gsap.to(
			{},
			{
				duration: text.length * 0.05,
				onUpdate: function () {
					const progress = this.progress();
					const length = Math.floor(progress * text.length);
					textEl.textContent = text.substring(0, length);
				}
			}
		);
	});
</script>

<div class="flex font-mono text-xl text-white lg:text-3xl">
	<span bind:this={textEl}></span>
	<span bind:this={caretEl} class="caret">|</span>
</div>

<style>
	.caret {
		display: inline-block;
		width: 0.5ch;
		color: white;
	}
</style>
