<script>
	import AdvantageList from '$lib/components/advantage/AdvantageList.svelte';
	import EquipmentList from '$lib/components/catalog/EquipmentList.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
</script>

<!-- <Header /> -->
<main>
	<Hero />
	<div class="container mx-auto pr-5 pl-5">
		<AdvantageList />
		<EquipmentList />
	</div>
</main>
<Footer />
