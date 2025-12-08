<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import CallButton from '$lib/components/ui/CallButton.svelte';
	import FeatureCallButton from '$lib/components/ui/FeatureCallButton.svelte';

	let { children } = $props();

	const siteTitle = 'Спецтехника | Сургут';
	const metaDescription =
		'Аренда строительной техники в Сургуте: экскаваторы, погрузчики, краны. Почасовая и посуточная аренда. Доставка по ХМАО. Низкие цены.';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Спецтехника Сургут</title>
	<meta name="description" content={metaDescription} />

	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href="https://spectech-surgut.ru" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="images/catalog/mini-excavator.webp" />

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content="ru" />
	<meta property="og:url" content="https://spectech-surgut.ru" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="images/chicken_classic.png" />
	<meta property="og:image:alt" content="Классический дёнер" />
	<meta property="og:description" content={metaDescription} />
</svelte:head>

<div class="page">
	{@render children()}
	<!-- <CallButton /> -->
	<FeatureCallButton />
</div>

<style>
	.page {
		position: relative;
		min-height: 100vh;
		min-height: 100dvh;

		font-family: 'Roboto', sans-serif;
		background-color: rgb(246 247 248 / var(--tw-bg-opacity, 1));
	}
</style>
