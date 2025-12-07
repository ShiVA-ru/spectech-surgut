<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		iconId: string;
		width?: number;
		height?: number;
		fill?: string;
	}

	let {
		class: className = '',
		iconId,
		width = 20,
		height = width,
		fill = 'light'
	}: Props = $props();
</script>

{#if iconId}
	<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<svg
		class="nc-icon {className}"
		viewBox="0 0 {width} {height}"
		{width}
		{height}
		fill="var(--{fill})"
		stroke="var(--{fill})"
	>
		<use xlink:href="/icons/sprite.svg#{iconId}" />
	</svg>
{/if}

<style>
	.nc-icon:focus {
		outline: none;
	}
	svg {
		display: block;
		transition: fill 0.1s linear;
	}
</style>
