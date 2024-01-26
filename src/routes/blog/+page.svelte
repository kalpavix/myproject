<script>
	import { PUBLIC_ASSETS_URL } from '$env/static/public';
	import PostCard from '$lib/blog/postCard.svelte';
	export let data;
</script>

<div class="mx-auto max-w-5xl p-4">
	<h1 class="mb-8 text-3xl font-bold">Latest Posts</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.articles as article (article.id)}
			<PostCard
				link="blog/{article.slug}"
				src="{PUBLIC_ASSETS_URL}/assets/{article.featured_image.id}/{article.featured_image
					.filename_download}"
				title={article.title}
			/>
		{/each}
	</div>
</div>
