<script lang="ts">
	import { onMount } from 'svelte';

	type ThemeMode = 'light' | 'dark' | 'system';
	let theme: ThemeMode = 'system';

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			const stored = localStorage.getItem('theme');
			if (stored === 'system' || !stored) {
				setTheme('system');
			}
		});

		const stored = localStorage.getItem('theme') as ThemeMode | null;
		if (stored) {
			setTheme(stored);
		} else {
			setTheme('system');
		}
	});

	function setTheme(mode: ThemeMode) {
		theme = mode;
		localStorage.setItem('theme', mode);

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (mode === 'dark' || (mode === 'system' && prefersDark)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function handleChange(e: Event) {
		const mode = (e.target as HTMLSelectElement).value as ThemeMode;
		setTheme(mode);
	}
</script>

<div
	class="flex items-center gap-3 rounded-md border border-gray-400 bg-white p-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
>
	<label for="theme" class="text-sm">Tryb:</label>
	<select
		id="theme"
		class="cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-1 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
		on:change={handleChange}
		bind:value={theme}
	>
		<option value="system">🖥️ Systemowy</option>
		<option value="light">🌞 Jasny</option>
		<option value="dark">🌙 Ciemny</option>
	</select>
</div>
