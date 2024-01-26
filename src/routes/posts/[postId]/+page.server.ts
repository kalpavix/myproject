import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await fetch(`https://dummyjson.com/posts/${params.postId}`);
	const post = await response.json();
	return { post };
};
