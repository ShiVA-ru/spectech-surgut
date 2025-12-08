<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page">
	{@render children()}
</div>

<style>
	.page {
		min-height: 100vh;
		min-height: 100dvh;
		background-color: rgb(246 247 248 / var(--tw-bg-opacity, 1));
	}
</style>
