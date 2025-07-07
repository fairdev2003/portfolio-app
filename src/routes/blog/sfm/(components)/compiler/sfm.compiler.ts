import axios, { type AxiosResponse } from 'axios';
import { KeywordColor } from '../styles/colors';

class Compiler {
	constructor() {}

	public ExtractFileNameFromURL(url: string): string {
		if (url === '') {
			return 'No program loaded';
		}
		const parts = url.split('/');
		return parts[parts.length - 1];
	}

	public async FetchSuperFactoryManagerContent(path: string): Promise<string> {
		const response: AxiosResponse<string> = await axios.get(path, { responseType: 'text' });
		return response.data;
	}

	public async GetSuperFactoryManagerLines(path: string): Promise<string[]> {
		const content = await this.FetchSuperFactoryManagerContent(path);
		const lines = content.split('\n');
		return lines;
	}

	public highlightCustomSFM(code: string): string {
		if (code.includes('NAME') || code.includes('name')) {
			const name_string = code.split('"')[1];
			const string_inside = name_string.split('"');
			code = code.replace(
				name_string,
				`<span class="${KeywordColor.comment}">${name_string}</span>`
			);
		}

		const comments: string[] = [];
		code = code.replace(/--.*/g, (match) => {
			const index = comments.length;
			comments.push(match);
			return `__COMMENT_PLACEHOLDER_${index}__`;
		});

		code = code
			.replace(
				/\b(NAME|EVERY|INPUT|OUTPUT|FROM|TO|END|DO|FORGET|ROUND ROBIN BY|EACH|SIDE|HAS|IF|THEN|WITH|EXCEPT|RETAIN|PULSE)\b/gi,
				(match) => `<span class="${KeywordColor.every}">${match}</span>`
			)
			.replace(/\b(\d+)\b/g, (match) => `<span class="${KeywordColor.number}">${match}</span>`)
			.replace(/::/g, `<span class="text-cyan-300">::</span>`)
			.replace(/,/g, `<span class="text-slate-400">,</span>`)
			.replace(
				/\b(TICKS|SECONDS|MINUTES|HOURS)\b/gi,
				(match) => `<span class="${KeywordColor.ticks}">${match}</span>`
			)
			.replace(
				/\b(TOP|BOTTOM|NORTH|SOUTH|EAST|WEST|FRONT|BACK|LEFT|RIGHT)\b/gi,
				(match) => `<span class="${KeywordColor.direction}">${match}</span>`
			)
			.replace(/\bTAG\b/gi, (match) => `<span class="${KeywordColor.variable}">${match}</span>`)
			.replace(
				/\b(gt|lt|ge|le|eq|ne)\b/gi,
				(match) => `<span class="${KeywordColor.operator}">${match}</span>`
			)
			.replace(
				/\bREDSTONE\b/gi,
				(match) => `<span class="${KeywordColor.redstone}">${match}</span>`
			);

		1;

		code = code.replace(/__COMMENT_PLACEHOLDER_(\d+)__/g, (_, index) => {
			const comment = comments[parseInt(index, 10)];
			return `<span class="${KeywordColor.comment}">${comment}</span>`;
		});

		return code;
	}
}

const SFMCompiler = new Compiler();
export { SFMCompiler };
