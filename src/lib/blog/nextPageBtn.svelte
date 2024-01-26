<script>
	export let next;
	export let message;
</script>

<div class="btn">
	<a href={next}>
		<button
			class="my-8 w-80 rounded border border-blue-700 bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700"
		>
			{message}
		</button>
	</a>
</div>
