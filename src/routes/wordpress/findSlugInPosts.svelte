<!-- <script lang="ts">
	import { page } from '$app/stores';

	const { postId } = $page.params;

	const data = [
		'25-kostengunstige-gesunde-lebensmittel-von-denen-wir-alle-mehr-essen-sollten',
		'abenteuer-in-der-wildnis-erlange-uberlebenskunste',
		'abenteuer-auf-dem-wasser-kanufahren-kajakabenteuer-segeln',
		'adrenalin-pur-abenteuerliche-flugerlebnisse-und-schwerelosigkeit-am-himmel'
	];

	let matchingElement = data.find((text) => text.includes(postId));
</script>

<h1>Welcome to Blog</h1>
<br />

<h2>Post title: {postId}</h2>
<br />
<br />

{#if data.includes(postId)}
	<p>The array contains the text</p>
{:else}
	<div></div>

	{#if matchingElement}
		<p>The array contains a text with the part: {matchingElement}</p>
	{:else}
		<p>The array does not contain a text with the part</p>
	{/if}

	<p>The array does not contain the text</p>
{/if} -->
