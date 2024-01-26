import { API_GRAPHQL, API_TOKEN } from '$env/static/private';

export const load = async ({ fetch }) => {
	const options = {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
			query: `
				query {
					articles(sort:"-date_created",filter: { status: { _eq: "published" } }) {
						id
						title
						slug
						featured_image{
							id
							filename_download
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

	return data;
};
