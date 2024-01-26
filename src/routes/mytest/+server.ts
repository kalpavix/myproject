import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const data = url.searchParams.get('data');
	console.log(data);

	return json(data);
};
