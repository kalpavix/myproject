<script>
	let post =
		'1 this is post 1 for page 1 <!--nextpage--> 2 this is page 2 with post 2 <!--nextpage--> 3 this is post 3 in page 3 <!--nextpage--> 4 and post 4 in page 4';
	const contentParts = post.split('<!--nextpage-->');

	let currentPage = 0;
</script>

<div>
	{@html contentParts[currentPage]}
</div>

<a href="/products/2">Next</a>
