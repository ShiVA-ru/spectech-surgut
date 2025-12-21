<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';

	let { data, children } = $props();
</script>

<Header title={data.equipment.title} />
{@render children()}
