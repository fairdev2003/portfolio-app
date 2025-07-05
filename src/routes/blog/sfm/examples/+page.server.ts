import fs from 'fs';
import path from 'path';
import type { LayoutLoad } from '../../$types';

export const load: LayoutLoad = async () => {
	const sfmPath = path.resolve('static/sfm');

	let filenames: string[] = [];

	try {
		filenames = fs.readdirSync(sfmPath);
	} catch (err) {
		console.error('Błąd podczas odczytu folderu static/sfm:', err);
	}

	return {
		sfmFiles: filenames
	};
};
