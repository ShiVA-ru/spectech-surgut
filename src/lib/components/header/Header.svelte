<script lang="ts">
	import { resolve } from '$app/paths';
	import IconSvg from '$lib/components/ui/icon-svg/IconSvg.svelte';

	const { title } = $props();
</script>

<header class="page-header">
	<div class="container mx-auto page-header__wrapper">
		<a class="page-header__link" href={resolve('/')} title="На главную">
			<IconSvg iconId="arrow-left" fill="black-color" width={20} />
		</a>
		<h1 class="page-header__title">{title}</h1>
	</div>
</header>

<style>
	.page-header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;

		display: flex;
		align-items: center;
		min-height: 50px;

		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		/*z-index: 1000;*/
	}

	.page-header__wrapper {
		display: grid;
		grid-template-columns: 50px 1fr 50px;
		gap: 10px;
		align-items: center;
		height: 100%;
	}

	.page-header__title {
		font-size: 20px;
		font-weight: bold;
		color: #333;
		text-align: center;
	}

	.page-header__link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 100%;
	}
</style>
