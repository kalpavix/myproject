import { writable } from 'svelte/store';

export const pollStore = writable([
	{ id: '1', question: 'qq1', answerA: 'yes', answerB: 'no' },
	{ id: '2', question: 'qq2', answerA: 'yes', answerB: 'no' },
	{ id: '3', question: 'qq3', answerA: 'yes', answerB: 'no' },
	{ id: '4', question: 'qq4', answerA: 'yes', answerB: 'no' }
]);
