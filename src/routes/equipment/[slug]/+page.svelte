<script lang="ts">
	import { formatHours, formatRub } from '#lib/format.js';

	let { data } = $props();

	const onRequest = 'По запросу';
	let { pricePerHour, minRentalHours, deliveryPerKm } = $derived(data.equipment);
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

		<section class="equipment__section">
			<h3 class="equipment__section-title">Характеристики</h3>
			<dl class="equipment__list">
				{#each data.equipment.specs as spec (spec.label)}
					<div class="equipment__row">
						<dt>{spec.label}</dt>
						<dd>{spec.value}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="equipment__section">
			<h3 class="equipment__section-title">Условия аренды</h3>
			<dl class="equipment__list">
				<div class="equipment__row">
					<dt>Стоимость работы</dt>
					<dd>
						{#if pricePerHour !== null}{formatRub(pricePerHour)}/час{:else}{onRequest}{/if}
					</dd>
				</div>
				<div class="equipment__row">
					<dt>Минимальный срок аренды</dt>
					<dd>
						{#if minRentalHours !== null}{formatHours(minRentalHours)}{:else}{onRequest}{/if}
					</dd>
				</div>
				<div class="equipment__row">
					<dt>Доставка за пределы г.&nbsp;Сургут</dt>
					<dd>
						{#if deliveryPerKm !== null}{formatRub(deliveryPerKm)}/км{:else}{onRequest}{/if}
					</dd>
				</div>
			</dl>
		</section>
	</div>
</main>

<style>
	.equipment {
		margin-top: 70px;
		padding-bottom: 40px;
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
		border-radius: var(--radius-media);
		overflow: hidden;
	}
	.equipment__title {
		text-align: center;
		font-size: var(--fs-headline);
		font-weight: bold;
	}

	.equipment__section {
		width: 100%;
		max-width: 450px;
		margin-top: 20px;
	}

	.equipment__section-title {
		margin-bottom: 10px;
		font-size: var(--fs-title);
		font-weight: bold;
	}

	.equipment__list {
		background-color: var(--white-color);
		border: 1px solid var(--color-hairline);
		border-radius: var(--radius-card);
	}

	.equipment__row {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		padding: 10px 15px;
		font-size: var(--fs-body);
		line-height: 1.25;
	}

	.equipment__row + .equipment__row {
		border-top: 1px solid var(--color-hairline);
	}

	.equipment__row dt {
		color: var(--color-muted);
	}

	.equipment__row dd {
		font-weight: 600;
		text-align: right;
		white-space: nowrap;
	}
</style>
