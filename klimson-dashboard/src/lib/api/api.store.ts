import { dev } from '$app/environment';
import { persistedWritable } from '$lib/cms/persist.svelte';

export const base_url = persistedWritable(
	'baseURL',
	dev ? 'http://localhost:8090' : 'https://api.klimson.dev'
);
