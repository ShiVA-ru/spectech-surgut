<script lang="ts">
	import './layout.css';
	// import favicon from '$lib/assets/favicon.svg';
	import FeatureCallButton from '$lib/components/ui/FeatureCallButton.svelte';

	let { children } = $props();

	const siteTitle = 'Спецтехника | Сургут';
	const metaDescription =
		'Аренда строительной техники в Сургуте: экскаваторы, погрузчики, краны. Почасовая и посуточная аренда. Доставка по ХМАО. Низкие цены.';
</script>

<svelte:head>
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<!-- 180x180 - ставим первым для safari -->
	<link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" /><!-- 32x32 -->
	<link rel="icon" href="/icon.svg" type="image/svg+xml" />
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="yandex-tableau-widget" href="/tableau.json" />

	<!-- <link rel="icon" href={favicon} /> -->
	<title>{siteTitle}</title>
	<meta name="description" content={metaDescription} />

	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href="https://spectech-surgut.ru" />

	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:image" content="images/catalog/mini-excavator.webp" /> -->
	<meta
		name="twitter:image"
		content="https://spectech-surgut.ru/images/catalog/mini-excavator.webp"
	/>

	<meta property="og:title" content={siteTitle} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content="ru" />
	<meta property="og:url" content="https://spectech-surgut.ru" />
	<meta property="og:type" content="website" />
	<meta property="og:logo" content="https://spectech-surgut.ru/icon.png" />
	<!-- <meta property="og:image" content="images/catalog/mini-excavator.webp" /> -->
	<meta
		property="og:image"
		content="https://spectech-surgut.ru/images/catalog/mini-excavator.webp"
	/>
	<meta property="og:image:alt" content="Аренда спецтехники в Сургуте" />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="page">
	{@render children()}
	<FeatureCallButton />
</div>

<style>
	.page {
		position: relative;

		display: grid;
		grid-template-rows: auto 1fr min-content;
		min-height: 100vh;
		min-height: 100dvh;

		font-family: 'Roboto', sans-serif;
		background-color: rgb(246 247 248 / var(--tw-bg-opacity, 1));
	}
</style>
