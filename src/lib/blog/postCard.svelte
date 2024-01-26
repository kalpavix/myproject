<script>
	export let title;
	export let src;
	export let link;
</script>

<div
	class="rounded-md border border-gray-300 bg-white shadow-md transition-shadow hover:bg-slate-100 hover:shadow-lg"
>
	<a href={link}>
		<img {src} alt={title} class="h-32 w-full rounded-t-md object-cover" />
		<h2 class="p-4 text-lg font-semibold">{title}</h2>
	</a>
</div>
