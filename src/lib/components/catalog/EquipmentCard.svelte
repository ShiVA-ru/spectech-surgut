<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		id: number;
		title: string;
		description: string;
		url: string;
	}

	let { id, title, description, url }: Props = $props();
</script>

<li class="equipment-card">
	<!-- <a href={resolve(`/equipment/${id}`)}>Click me!</a> -->
	<a href={resolve(`/equipment/${id}`)} title="Открыть карточку техники">
		<img class="equipment-card__image" src={url} alt={title} loading="lazy" />
		<div class="equipment-card__wrapper">
			<h3 class="equipment-card__title">
				{title}
			</h3>
			<p class="equipment-card__description">{description}</p>
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
		cursor: pointer;
	}

	.equipment-card:hover {
		box-shadow: var(--shadow-card-hover);
	}

	.equipment-card__wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: start;
		padding: 10px;
	}

	.equipment-card__image {
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
</style>
