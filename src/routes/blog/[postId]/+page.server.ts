import { API_GRAPHQL, API_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { postId } = params;

	const options = {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
			query: `
				query {
					articles(filter: { slug: { _eq: "${postId}" } }) {
						id
						title
						content
						status
						slug
						multiple_pages
						featured_image{
							id
							filename_download
						}
						category{
							categories_id{
								category
							}
						}
					}
				}
			`
		})
	};

	const response = await fetch(API_GRAPHQL, options);

	if (!response.ok) {
		throw new Error(`Failed to fetch data: ${response.statusText}`);
	}

	const { data } = await response.json();

	if (data.articles[0].status !== 'published') {
		throw error(404, 'Article not found...');
	}

	if (data.articles[0].multiple_pages) {
		const contentParts = data.articles[0].content.split('<!--nextpage-->');
		data.articles[0].content = contentParts[0];
		data.articles[0].totalParts = contentParts.length;
	}

	return data.articles[0];
};
