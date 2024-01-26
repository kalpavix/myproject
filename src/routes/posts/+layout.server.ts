import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const response = await fetch(`https://dummyjson.com/posts?limit=6`);
	const posts = await response.json();
	return posts;
};
