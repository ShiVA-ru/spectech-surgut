<section class="hero">
	<picture>
		<!-- Мобильный кроп -->
		<source
			width="100%"
			height="100%"
			media="(max-width: 599px)"
			type="image/webp"
			srcset="images/excavator-420.webp"
		/>

		<!-- Планшет -->
		<source
			class="hero__banner"
			width="100%"
			height="100%"
			media="(min-width: 600px) and (max-width: 1199px)"
			type="image/webp"
			srcset="images/excavator-800.webp"
		/>

		<!-- Десктоп -->
		<source
			class="hero__banner"
			width="100%"
			height="100%"
			media="(min-width: 1200px)"
			type="image/webp"
			srcset="images/excavator.webp"
		/>
		<!-- <source
			width="100%"
			height="100%"
			type="image/webp"
			srcset="
              /images/excavator-420.webp 420w,
              /images/excavator-800.webp 800w,
              /images/excavator.webp 1200w"
			sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
		/> -->
		<img
			class="hero__banner"
			src="images/excavator.webp"
			alt="желтый экскаватор"
			width="100%"
			height="100%"
			fetchpriority="high"
		/>
	</picture>
	<div class="container mx-auto pl-5 pr-5">
		<h1 class="hero__title">Аренда спецтехники</h1>
		<p class="hero__description">Надежная техника для ваших задач в Сургуте и ХМАО</p>
	</div>
</section>

<style>
	.hero {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: start;
		padding: 20px;
		height: 320px;

		color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

		overflow: hidden;
	}

	.hero__banner {
		z-index: 1;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero__title {
		font-size: 32px;
		line-height: 1.2;
		font-weight: bold;
		margin: 0;
	}

	.hero__title,
	.hero__description {
		position: relative;
		z-index: 2;
	}
</style>
