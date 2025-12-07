<script>
	import AdvantageList from '$lib/components/advantage/AdvantageList.svelte';
	import EquipmentList from '$lib/components/catalog/EquipmentList.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<Header />
<main>
	<Hero />
	<div class="container mx-auto pr-5 pl-5">
		<AdvantageList />
		<EquipmentList />
	</div>
</main>
<Footer />
