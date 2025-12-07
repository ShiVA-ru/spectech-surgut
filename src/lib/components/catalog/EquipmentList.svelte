<script>
	import EquipmentCard from './EquipmentCard.svelte';

	const equipments = [
		{ id: 1, title: 'Большой парк', iconId: 'truck-line' },
		{ id: 2, title: 'Опытные операторы', iconId: 'engenier' },
		{ id: 3, title: 'Доставка на объект', iconId: 'cube' },
		{ id: 4, title: 'Гибкие условия', iconId: 'calendar' }
	];
</script>

<h2 class="">Наша техника</h2>
<ul class="advantage-list">
	{#each equipments as equipment (equipment.id)}
		<!-- <p>{advantage.title}</p> -->
		<EquipmentCard {...equipment} />
	{/each}
</ul>

<style>
	.advantage-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-gap: 20px;
		padding: 20px;
		/*background-color: rgb(246 247 248 / var(--tw-bg-opacity, 1));*/
	}
</style>
