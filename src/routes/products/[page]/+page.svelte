<script>
	export let data;
</script>

<div>
	{@html data.content}
</div>

{#if data.currentPage < data.total}
	<a href="/products/{(data.currentPage += 1)}">Next</a>
{/if}
