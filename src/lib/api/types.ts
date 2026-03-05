import type { AxiosResponse } from 'axios';

/**
 * Typ konfiguracji inicjalizacyjnej klasy `Api`.
 *
 * Pozwala nadpisaÄ‡ domyĹ›lne wartoĹ›ci Ĺ›rodowiskowe i Ĺ›cieĹĽki API.
 * KaĹĽda z wĹ‚aĹ›ciwoĹ›ci jest opcjonalna â€” podanie dowolnej spowoduje
 * zastÄ…pienie domyĹ›lnej konfiguracji w konstruktorze klasy `Api`.
 *
 * @property {string} [dev_server]   - Adres serwera deweloperskiego (np. `http://localhost:8080`)
 * @property {string} [prod_server]  - Adres serwera produkcyjnego (np. `https://api.mojaapka.com`)
 * @property {string} [prod_version] - Wersja API (np. `/v1`)
 * @property {string} [prod_prefix]  - Prefiks Ĺ›cieĹĽki API (np. `/api`)
 */
export type ApiClassParams = {
	dev_server?: string;
	prod_server?: string;
	prod_version?: string;
	prod_prefix?: string;
	prod_switch?: boolean;
};

/**
 * Rozszerzony typ odpowiedzi z serwera.
 *
 * Obejmuje standardowÄ… odpowiedĹş `AxiosResponse<T>`, a dodatkowo
 * zawiera czas trwania ĹĽÄ…dania (`duration`), mierzony w milisekundach.
 * WartoĹ›Ä‡ ta jest ustawiana automatycznie przez interceptory Axios w klasie `Api`.
 *
 * @template T Typ danych zwracanych w odpowiedzi (np. `User`, `Quiz`, `Question[]`)
 *
 * @example
 * ```ts
 * const response: ServerResponse<Quiz> = await api.quiz.getQuiz({author: "Fredi Kamionka"});
 * console.log(response.data.name); // -> dane u Quizie
 * console.log(response.duration); // -> czas odpowiedzi w ms
 * ```
 */
export type ServerResponse<T> = AxiosResponse<T> & { duration: number };

export type BackendResponse = {
	message: string;
	succes: boolean;
};

export type ApiConfig = {
	server: string;
	storage_prefix: string;
	storage_path: string;
};

export type ImageKey = 'quiz' | 'question' | 'blog' | 'hero' | 'static';

export type ImageList = string[];

export type QuizWhereObject = {
	id: number | undefined;
};

export type CheckCorrectObject = {
	id: number;
	is_correct: boolean;
};

export type UpdateOneFieldType<T> = {
	[K in keyof T]: {
		key: K;
		value: T[K];
	};
}[keyof T];
