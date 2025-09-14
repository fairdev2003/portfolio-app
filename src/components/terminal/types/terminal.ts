import type { Snippet } from 'svelte';
import type { VSCThemeColorKey } from '../../../routes/blog/sfm/(components)/styles/colors';

export type TerminalProps = {
	children?: Snippet;
	id?: string; // id: tm-1243
	name?: string; // klimson/new/terminal
	records?: TerminalRecordType[]; // Motherboard: MSI RG1092 20-09-2024
};

export type TerminalRecordType = {
	key: string;
	value: string;
	keyColor?: string;
	valueColor?: string;
};
