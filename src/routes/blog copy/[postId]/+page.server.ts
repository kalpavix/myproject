import { API_GRAPHQL, API_TOKEN } from '$env/static/private';

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

	return data.articles[0];
};
