<script>
	import Header from '$lib/polls/header.svelte';
	import Footer from '$lib/polls/footer.svelte';
	import Tabs from '$lib/polls/tabs.svelte';
	import CreatePollForm from '$lib/polls/createPollForm.svelte';
	import PollsList from '$lib/polls/pollsList.svelte';

	let items = ['Current Polls', 'Add New Polls'];
	let activeItem = 'Current Polls';

	// let polls = $pollStore;
	const handleTabs = (e) => {
		activeItem = e.detail;
	};

	const handleAddPoll = () => {
		activeItem = 'Current Polls';
	};
</script>

<Header />

<main>
	<Tabs {items} {activeItem} on:tapChange={handleTabs} />

	{#if activeItem == 'Current Polls'}
		<PollsList />
	{:else}
		<CreatePollForm on:AddPoll={handleAddPoll} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
