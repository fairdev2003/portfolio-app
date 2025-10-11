<script lang="ts">
	let theme: 'light' | 'dark' = 'light';

	// Sprawdź localStorage przy montowaniu komponentu
	import { onMount } from 'svelte';
	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme === 'dark') {
			theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleTheme() {
		if (theme === 'light') {
			theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			theme = 'light';
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}
</script>

<button
	on:click={toggleTheme}
	class="rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
>
	{theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
</button>
