<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatRub } from '$lib/format.js';

	interface Props {
		id: number;
		title: string;
		description: string;
		url: string;
		pricePerHour?: number | null;
	}

	let { id, title, description, url, pricePerHour = null }: Props = $props();
</script>

<li class="equipment-card">
	<a class="equipment-card__link" href={resolve(`/equipment/${id}`)}>
		<img
			class="equipment-card__image"
			src={url}
			alt={title}
			width="500"
			height="235"
			loading="lazy"
		/>
		<div class="equipment-card__wrapper">
			<h3 class="equipment-card__title">
				{title}
			</h3>
			<p class="equipment-card__description">{description}</p>
			{#if pricePerHour !== null}
				<p class="equipment-card__price">от {formatRub(pricePerHour)}/час</p>
			{/if}
		</div>
	</a>
</li>

<style>
	.equipment-card {
		background-color: var(--color-surface);
		border: 1px solid var(--color-card-border);
		border-radius: var(--radius-card);

		overflow: hidden;
		transition: box-shadow 0.3s ease-in-out;
	}

	.equipment-card:hover,
	.equipment-card:focus-within {
		box-shadow: var(--shadow-card-hover);
	}

	.equipment-card__link {
		display: block;
		height: 100%;
		color: inherit;
		text-decoration: none;
	}

	.equipment-card__link:focus-visible {
		outline: 2px solid var(--primary-color);
		outline-offset: -2px;
	}

	.equipment-card__wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: start;
		padding: 10px;
	}

	.equipment-card__image {
		display: block;
		width: 100%;
		height: 235px;
		object-fit: cover;
	}

	.equipment-card__title {
		font-size: var(--fs-body);
		line-height: 1.2;
		font-weight: 600;
	}

	.equipment-card__description {
		font-size: var(--fs-label);
		line-height: 1.2;
		color: var(--color-muted);
	}

	.equipment-card__price {
		font-size: var(--fs-body);
		line-height: 1.2;
		font-weight: 700;
	}
</style>
