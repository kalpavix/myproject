<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-4">
	<h1>Posts</h1>
	<p>Showing {data.posts.length} Posts.</p>
</div>

<div class="ml-3">
	<ul>
		{#each data.posts as { id, title }}
			<li><a href="/posts/{id}">{title}</a></li>
		{/each}
	</ul>
</div>
