import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export function persistedWritable<T>(key: string, initialValue: T) {
	let storedValue: T | null = null;

	if (browser) {
		const json = localStorage.getItem(key);
		2;
		if (json) {
			try {
				storedValue = JSON.parse(json);
			} catch (e) {
				console.error(`Nie udało się odczytać localStorage dla klucza ${key}`, e);
			}
		}
	}

	const store = writable<T>(storedValue ?? initialValue);

	if (browser) {
		store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}

export const editMode = persistedWritable<boolean>('editMode', false);
