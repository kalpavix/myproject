import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(comments);
}

export async function POST(requestEvent) {
	const { text } = await requestEvent.request.json();
	const newComment = {
		id: comments.length + 1,
		comment: text
	};
	comments.push(newComment);

	return json(comments, { status: 201 });
}
