<script>
	import { fade, scale } from 'svelte/transition';
</script>

<div in:fade|global out:scale class="m-5 inline-block rounded-md bg-gray-800 p-5 shadow-md">
	<slot />
</div>
