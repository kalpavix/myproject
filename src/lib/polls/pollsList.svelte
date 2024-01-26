<script lang="ts">
	import Card from './card.svelte';
	import { pollStore } from '$lib/polls/pollStore';
	import { flip } from 'svelte/animate';

	let polls = $pollStore;

	const handleDelete = (id) => {
		polls = polls.filter((poll) => poll.id !== id);
		pollStore.update(() => {
			return polls;
		});
	};
</script>

{#if polls.length !== 0}
	{#each polls as poll (poll.id)}
		<div class="inline-block" animate:flip={{ duration: 500 }}>
			<Card>
				<div class="w-80">
					<h2 class="text-lg font-bold">Qestion: {poll.question}</h2>
					<div>Answer 1: {poll.answerA}</div>
					<div>Answer 2: {poll.answerB}</div>
				</div>
				<div class="text-center">
					<button
						on:click={() => handleDelete(poll.id)}
						class="m-3 rounded bg-red-600 p-1 px-4 hover:opacity-80 active:border"
					>
						Delete
					</button>
				</div>
			</Card>
		</div>
	{/each}
{:else}
	<p>No Polls here....</p>
{/if}
