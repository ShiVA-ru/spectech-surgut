<script>
	import AdvantageCard from './AdvantageCard.svelte';

	const advantages = [
		{ id: 1, title: 'Большой парк', iconId: 'truck-line' },
		{ id: 2, title: 'Опытные операторы', iconId: 'engenier' },
		{ id: 3, title: 'Доставка на объект', iconId: 'cube' },
		{ id: 4, title: 'Гибкие условия', iconId: 'calendar' }
	];
</script>

<section class="advantage">
	<h2 class="visually-hidden">Наши преимущества</h2>
	<ul class="advantage__list">
		{#each advantages as advantage (advantage.id)}
			<AdvantageCard {...advantage} />
		{/each}
	</ul>
</section>

<style>
	.advantage__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-gap: 20px;
		padding: 20px 0;
	}
</style>
