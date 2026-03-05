import type { AxiosInstance, AxiosResponse } from 'axios';

class Klimson {
	/**
	 * Tworzy nowÄ… instancjÄ™ ImageApi.
	 *
	 * @param {AxiosInstance} api - Instancja klienta Axios skonfigurowana dla aktualnego środowiska.
	 * @param {ApiConfig} api_config - Konfiguracja API (np. host, dev_server, baseURL).
	 */
	constructor(private api: AxiosInstance) {
		this.api = api;
	}

	protected pathName = '/klimson';

	public async GetEntries(): Promise<{ entries: number }> {
		try {
			const response: AxiosResponse<{ entries: number }> = await this.api.get(
				`${this.pathName}/entries`
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching entries:', error);
			throw error;
		}
	}
}
