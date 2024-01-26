import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`https://dummyjson.com/posts?limit=15`);
	const posts = await response.json();
	return posts;
};
