export const load = async ({ fetch }) => {
	const apiUrl = 'https://heavenora.com/wp-json/wp/v2/posts/13898';

	const response = await fetch(apiUrl);

	if (!response.ok) {
		throw new Error(`Failed to fetch data: ${response.statusText}`);
	}

	const data = await response.json();

	return data.content;
};
