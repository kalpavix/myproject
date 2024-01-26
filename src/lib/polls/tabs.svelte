<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let items: Array<string>;
	export let activeItem: string;

	const dispatch = createEventDispatcher();
</script>

<div class="tabs">
	<ul>
		{#each items as item}
			<li>
				<div class:active={item === activeItem}>
					<a href="#/" on:click|preventDefault={() => dispatch('tapChange', item)}>{item}</a>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tabs {
		margin-bottom: 40px;
	}
	ul {
		display: flex;
		justify-content: center;
		list-style-type: none;
		padding: 0;
	}
	li {
		margin: 0 20px;
		font-size: 20px;
		cursor: pointer;
	}
	.active {
		color: rgb(255, 124, 36);
		border-bottom: 2px solid rgb(255, 124, 36);
		padding-bottom: 8px;
	}
</style>
