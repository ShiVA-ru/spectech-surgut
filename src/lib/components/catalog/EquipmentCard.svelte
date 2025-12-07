<script lang="ts">
	interface Props {
		title: string;
		description: string;
		url: string;
	}

	let { title, description, url }: Props = $props();
</script>

<li class="equipment-card">
	<img class="equipment-card__image" src={url} alt={title} />
	<div class="equipment-card__wrapper">
		<h3 class="equipment-card__title">
			{title}
		</h3>
		<p class="equipment-card__description">{description}</p>
	</div>
</li>

<style>
	.equipment-card {
		background-color: rgb(255 255 255 / 0.9);
		border: 1px solid rgb(299 231 235 / 0.8);
		border-radius: 0.5rem;
		overflow: hidden;
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
		font-size: 16px;
		line-height: 1.2;
		font-weight: 600;
	}

	.equipment-card__description {
		font-size: 14px;
		line-height: 1.2;
		color: rgb(107 114 128);
	}
</style>
