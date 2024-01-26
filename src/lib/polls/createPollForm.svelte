<script>
	import { createEventDispatcher } from 'svelte';
	import { pollStore } from './pollStore';
	import { fade } from 'svelte/transition';

	let fields = { id: crypto.randomUUID(), question: '', answerA: '', answerB: '' };
	let error = '';

	const dispatch = createEventDispatcher();

	const submitHandler = () => {
		if (!fields.question || !fields.answerA || !fields.answerB) {
			error = 'Please enter a question and answer';
		} else {
			error = '';
			// $pollStore = [fields, ...$pollStore];
			pollStore.update((polls) => {
				return [fields, ...polls];
			});
			dispatch('AddPoll');
		}
	};
</script>

<form in:fade class="m-auto w-80" on:submit|preventDefault={submitHandler}>
	<div class="mx-auto my-4">
		<label for="question" class="m-3 font-sans text-lg text-green-300"> Poll Question: </label>
		<input
			class="mt-2 w-full rounded-md p-2 text-lg text-black"
			type="text"
			id="question"
			bind:value={fields.question}
		/>
	</div>
	<div class="mx-auto my-4">
		<label for="answerA" class="m-3 font-sans text-lg text-green-300">Answer A:</label>
		<input
			class="mt-2 w-full rounded-md p-2 text-lg text-black"
			type="text"
			id="answerA"
			bind:value={fields.answerA}
		/>
	</div>
	<div class="mx-auto my-4">
		<label for="answerB" class="m-3 font-sans text-lg text-green-300">Answer B:</label>
		<input
			class="mt-2 w-full rounded-md p-2 text-lg text-black"
			type="text"
			id="answerB"
			bind:value={fields.answerB}
		/>
	</div>
	<div class="mx-auto my-1 text-center text-red-400"><p>{error}</p></div>
	<button class="cursor-pointer rounded-lg bg-emerald-500 p-3 text-lg">Add Poll</button>
</form>
