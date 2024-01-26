<script lang="ts">
	import { page } from '$app/stores';

	const greeting = {
		en: 'Hello!',
		fr: 'bonjour',
		es: 'holla!'
	};

	const { lang } = $page.params;
</script>

<h1>{greeting[lang]} to Home</h1>
