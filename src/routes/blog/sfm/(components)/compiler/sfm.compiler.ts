import axios from 'axios';
import { KeywordColor } from '../styles/colors';

class Compiler {
	constructor() {}

	public async FetchSuperFactoryManagerContent(path: string): Promise<string> {
		const response = await axios.get(path, { responseType: 'text' });
		return response.data;
	}

	public async GetSuperFactoryManagerLines(path: string): Promise<string[]> {
		const content = await this.FetchSuperFactoryManagerContent(path);
		const lines = content.split('\n');
		return lines;
	}

	public highlightCustomSFM(code: string): string {
		return code
			.replace(/-- .*/g, (match) => `<span class="text-zinc-500 italic">${match}</span>`)
			.replace(
				/\b(NAME|EVERY|INPUT|OUTPUT|FROM|TO|END|DO|FORGET|ROUND ROBIN BY BLOCK|EACH)\b/g,
				(match) => `<span class="${KeywordColor.every} font-semibold">${match}</span>`
			)
			.replace(/\b(\d+)\b/g, (match) => `<span class="text-amber-300">${match}</span>`)
			.replace(/::/g, `<span class="text-cyan-300">::</span>`)
			.replace(/,/g, `<span class="text-slate-400">,</span>`);
	}
}

const SFMCompiler = new Compiler();
export { SFMCompiler };
