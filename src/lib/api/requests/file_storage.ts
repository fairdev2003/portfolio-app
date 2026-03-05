/**
 * ImageApi - klasa do obsĹ‚ugi uploadu oraz pobierania obrazĂłw
 * z backendu (upload, generowanie URL, listowanie plikĂłw).
 */

import type { AxiosInstance } from 'axios';

class FileStorage {
	/**
	 * Tworzy nowÄ… instancjÄ™ ImageApi.
	 *
	 * @param {AxiosInstance} api - Instancja klienta Axios skonfigurowana dla aktualnego środowiska.
	 * @param {ApiConfig} api_config - Konfiguracja API (np. host, dev_server, baseURL).
	 */
	constructor(private api: AxiosInstance) {
		this.api = api;
	}

	protected pathName = '/storage';

	public async GetFile(fileKey: string): Promise<string> {
		try {
			const response = await this.api.get(`${this.pathName}/file/${fileKey}`);
			return response.data.url;
		} catch (error) {
			console.error('Error fetching file URL:', error);
			throw error;
		}
	}

	public async GetFileUrl(fileKey: string): Promise<string> {
		return `${this.api.defaults.baseURL}${this.pathName}/file/${fileKey}`;
	}
}

export { FileStorage };
