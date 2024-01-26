<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.body}</p>
<div>
	<p>Tags:</p>
	<div>
		<ul>
			{#each data.post.tags as tag}
				<li class="list-none">{tag}</li>
			{/each}
		</ul>
	</div>
</div>

<div class="mt-7">
	<h4>Other Posts</h4>
	<div>
		<ul>
			{#each data.posts as { id, title }}
				<li class="list-none">
					<a href="/posts/{id}" class="text-blue-500 hover:underline">{title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
