<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
