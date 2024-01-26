<script>
	import { PUBLIC_ASSETS_URL } from '$env/static/public';
	import NextPageBtn from '$lib/blog/nextPageBtn.svelte';
	export let data;
	const featuredImg = `${PUBLIC_ASSETS_URL}/assets/${data.featured_image.id}/${data.featured_image.filename_download}`;
</script>

<div class="container m-auto mb-20 max-w-4xl text-center text-lg">
	<div class="featured m-12">
		<img src={featuredImg} alt="featured" class="mx-auto" />
	</div>
	<div class="title my-2 font-bold">
		<h1>{data.title}</h1>
	</div>
	<div class="categories">
		{#each data.category as category}
			<span class="mx-2">
				{category.categories_id.category}
			</span>
		{/each}
	</div>
	<div class="content mx-auto mt-7 text-left">
		{@html data.content}
	</div>
	{#if data.nextPage <= data.totalParts}
		<NextPageBtn next={data.nextPage} message="Next Page" />
	{/if}
</div>
