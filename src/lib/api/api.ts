import { dev } from '$app/environment';
import axios, { type AxiosInstance } from 'axios';
import type { ApiClassParams, ApiConfig } from './types';
import { FileStorage } from './requests/file_storage';

export class ApiStatic {
	protected server = 'https://api.klimson.dev';

	protected storage_prefix = '/interface/bucket';

	protected storage_path = this.server + this.storage_prefix;
}

/**
 * Klasa bazowa definiujÄ…ca konfiguracjÄ™ API.
 *
 * Zawiera podstawowe informacje o serwerach, wersjach i Ĺ›cieĹĽkach API,
 * a takĹĽe automatycznie generuje bazowy adres `_baseURL` w zaleĹĽnoĹ›ci od Ĺ›rodowiska (`dev` vs `prod`).
 */

/**
 * GĹ‚Ăłwna klasa API, rozszerzajÄ…ca konfiguracjÄ™ bazowÄ… (`ApiStatic`)
 * i inicjalizujÄ…ca instancjÄ™ klienta `axios`.
 */
export class Api extends ApiStatic {
	/** Instancja Axios skonfigurowana dla aktualnego Ĺ›rodowiska */
	public api: AxiosInstance;

	/**
	 * Tworzy nowy obiekt API z opcjonalnÄ… konfiguracjÄ….
	 *
	 * @param {ApiClassParams} [params] - Obiekt pozwalajÄ…cy nadpisaÄ‡ domyĹ›lne ustawienia (np. inne serwery lub wersje API).
	 *
	 * @example
	 * ```ts
	 * const api = new Api({
	 *   dev_server: 'http://127.0.0.1:5000',
	 *   prod_server: 'https://api.myapp.com',
	 * });
	 *
	 * const data = await api.quiz.GetQuiz({ id: 1 }); // sql where
	 * console.log(data);
	 * ```
	 */
	constructor(params?: ApiClassParams) {
		super();
		this.api = axios.create({
			baseURL: this.server,
			headers: {
				Accept: 'application/json'
			}
		});
	}

	public get config(): ApiConfig {
		return {
			server: this.server,
			storage_prefix: this.storage_prefix,
			storage_path: this.storage_path
		};
	}

	public get file_storage() {
		return new FileStorage(this.api);
	}
}

/**
 * DomyĹ›lna instancja API, gotowa do uĹĽycia w caĹ‚ej aplikacji.
 *
 * UĹĽywa domyĹ›lnych adresĂłw zdefiniowanych w klasie `ApiStatic`:
 * - `dev` â†’ `http://localhost:8080`
 * - `prod` â†’ `https://harcquiz-ztai.onrender.com`
 * @example
 * ```ts
 * // Utworzenie niestandardowej konfiguracji (np. Ĺ›rodowisko testowe)
 * import { api } from '$lib/api';
 *
 * const testApi = new Api({
 *   dev_server: 'http://127.0.0.1:5000',
 *   prod_server: 'https://staging.harcquiz.dev',
 *   prod_version: '/v2',
 *   prod_prefix: '/api-test'
 * });
 * ```
 */
const api = new Api();

export { api };
