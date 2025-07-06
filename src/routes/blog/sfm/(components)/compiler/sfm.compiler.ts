import axios from 'axios';

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
}

const SFMCompiler = new Compiler();
export { SFMCompiler };
