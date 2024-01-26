<script lang="ts">
	import { page } from '$app/stores';

	const slugArr = $page.params.slug.split('/');
	console.log(slugArr);
</script>

<h1>Welcome to Docs</h1>
<br />

{#each slugArr as slug}
	<h2>{slug}</h2>
{/each}
