/**
 * ImageApi - klasa do obsĹ‚ugi uploadu oraz pobierania obrazĂłw
 * z backendu (upload, generowanie URL, listowanie plikĂłw).
 */

import type { AxiosInstance } from 'axios';

class FileStorage {
	/**
	 * Tworzy nowÄ… instancjÄ™ ImageApi.
	 *
	 * @param {AxiosInstance} api - Instancja axios uĹĽywana do wykonywania requestĂłw.
	 * @param {ApiConfig} api_config - Konfiguracja API (np. host, dev_server, baseURL).
	 */
	constructor(private api: AxiosInstance) {
		this.api = api;
	}

	public async GetFile(fileKey: string): Promise<string> {
		try {
			const response = await this.api.get(`https://api.klimson.dev/interface/bucket/${fileKey}`);
			return response.data.url;
		} catch (error) {
			console.error('Error fetching file URL:', error);
			throw error;
		}
	}
}

export { FileStorage };
