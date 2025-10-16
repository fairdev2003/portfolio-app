import axios from 'axios';

export const route =
	import.meta.env.MODE === 'production' ? 'https://api.klimson.dev' : 'http://localhost:3000';

export const ApiInstance = axios.create({
	baseURL: route,
	headers: { 'X-Custom-Header': 'foobar' }
});

export const siema = await ApiInstance.get('/');
