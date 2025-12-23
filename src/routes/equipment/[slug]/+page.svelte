<script lang="ts">
	let { data } = $props();
	// const { id, title, description, url } = data.equipment;
</script>

<!-- <p>{data.equipment}</p> -->
<main class="equipment">
	<div class="container mx-auto equipment__container">
		<picture class="equipment__image">
			<!-- Мобильный кроп -->
			<source
				width="100%"
				height="100%"
				media="(max-width: 599px)"
				type="image/webp"
				srcset={data.equipment.url}
			/>

			<!-- Планшет -->
			<source
				width="100%"
				height="100%"
				media="(min-width: 600px) and (max-width: 1199px)"
				type="image/webp"
				srcset={data.equipment.url}
			/>

			<!-- Десктоп -->
			<source
				width="100%"
				height="100%"
				media="(min-width: 1200px)"
				type="image/webp"
				srcset={data.equipment.url}
			/>
			<img
				src={data.equipment.url}
				alt={data.equipment.title}
				width="100%"
				height="100%"
				fetchpriority="high"
			/>
		</picture>

		<h2 class="equipment__title">{data.equipment.title}</h2>

		<p class="equipment__description">{data.equipment.description}</p>
	</div>
</main>

<style>
	.equipment {
		margin-top: 70px;
	}

	.equipment__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 0 10px;
	}

	.equipment__image {
		max-width: 450px;
		border-radius: 20px;
		overflow: hidden;
	}
	.equipment__title {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}
</style>
