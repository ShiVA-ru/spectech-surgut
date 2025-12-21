<script>
	import { equipments } from '$lib/assets/store/data.js';
	import EquipmentCard from './EquipmentCard.svelte';
</script>

<section class="equipment">
	<h2 class="equipment__title">Наша техника</h2>
	<ul class="equipment__list">
		{#each equipments as equipment (equipment.id)}
			<EquipmentCard {...equipment} />
		{/each}
	</ul>
</section>

<style>
	.equipment__title {
		font-size: 24px;
		font-weight: bold;
		/*margin-bottom: 5px;*/
	}

	.equipment__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 20px;
		padding: 20px 0;
		/*background-color: rgb(246 247 248 / var(--tw-bg-opacity, 1));*/
	}
</style>
