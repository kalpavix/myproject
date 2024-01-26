<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<header>
	<nav class="m-5 flex justify-center space-x-8 p-4">
		<div>
			<a href="/posts">Home Posts</a>
		</div>
		<div>
			<a href="/posts">About Us</a>
		</div>
		<div>
			<a href="/posts">Archive</a>
		</div>
	</nav>
</header>

<div class="layout grid grid-cols-3 p-5">
	<aside class="">
		<h4 class="mb-4">Posts</h4>
		<nav>
			<ul>
				{#each data.posts as { id, title }}
					<li><a href="/posts/{id}" class="text-blue-500 hover:underline">{title}</a></li>
				{/each}
			</ul>
		</nav>
	</aside>

	<main class="col-span-2">
		<slot />
	</main>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css';
</style>
