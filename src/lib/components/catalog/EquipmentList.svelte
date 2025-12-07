<script>
	import EquipmentCard from './EquipmentCard.svelte';

	const equipments = [
		{
			id: 1,
			title: 'Гусеничный миниэкскаватор',
			description: 'Ковш 0.5 м³',
			url: 'images/catalog/mini-excavator.webp'
		},
		{
			id: 2,
			title: 'Фронтальный погрузчик',
			description: 'Грузоподъемность: 3 т',
			url: 'images/catalog/loader.webp'
		},
		{
			id: 3,
			title: 'Кран-манипулятор',
			description: 'Грузоподъемность: 5 т',
			url: 'images/catalog/crane.webp'
		},
		{
			id: 4,
			title: 'Эвакуатор',
			description: 'Грузоподъемность: 5 т',
			url: 'images/catalog/tow-truck.webp'
		}
	];
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
