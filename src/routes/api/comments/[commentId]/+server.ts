import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET(requestEvent) {
	const { commentId } = requestEvent.params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));

	if (!comment) return json(false);

	return json(comment);
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const { text } = await request.json();

	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment.comment = text;

	return json(comment);
}

export async function DELETE(requestEvent) {
	const { commentId } = requestEvent.params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	if (comment) {
		const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
		comments.splice(index, 1);
	}

	return json(comment);
}
