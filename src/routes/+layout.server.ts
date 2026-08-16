import { api } from '$lib/api/api';
import axios, { type AxiosResponse } from 'axios';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request, fetch }) => {
	try {
		const cookie = request.headers.get('cookie') || '';
		const response: AxiosResponse<{ access: boolean }> = await api.api.get('/admin/verify', {
			headers: { Cookie: cookie }
		});

		console.log(response.data);

		return {
			serverData: response.data
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Błąd autoryzacji SSR:', error.message);
		} else {
			console.error('Nieznany błąd:', error);
		}

		return {
			serverData: null
		};
	}
};
