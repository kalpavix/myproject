import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
	const randomNumber = Math.floor(Math.random() * 29) + 2;
	const response = await fetch(`https://dummyjson.com/posts?limit=${randomNumber}`);
	const posts = await response.json();

	setHeaders({
		'cache-control': 'max-age=30'
	});

	return json(posts);
};
