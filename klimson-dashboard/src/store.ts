import { persistedWritable } from '$lib/cms/persist.svelte';

export const editMode = persistedWritable<boolean>('editMode', false);
