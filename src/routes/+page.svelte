<script>
	let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<div class="mx-auto max-w-5xl p-4">
	<h1 class="mb-8 text-3xl font-bold">Latest Posts</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each n as x}
			<div
				class="rounded-md border border-gray-300 bg-white shadow-md transition-shadow hover:bg-slate-100 hover:shadow-lg"
			>
				<a href="#">
					<img
						src="http://localhost:8055/assets/e146e635-0b48-43c1-b035-f2ab61699903"
						alt="Post 2"
						class="h-32 w-full rounded-t-md object-cover"
					/>
					<h2 class="p-4 text-lg font-semibold">Post Title 2</h2>
				</a>
			</div>
		{/each}
	</div>
</div>
