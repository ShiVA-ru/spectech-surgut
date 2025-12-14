<script>
	import Divider from '../ui/Divider.svelte';
	import Contacts from './Contacts.svelte';
	import Requisites from './Requisites.svelte';
</script>

<footer class="bg-white page-footer">
	<div class="container mx-auto p-5 flex gap-4 flex-col">
		<Contacts />
		<Divider />
		<Requisites />
	</div>
</footer>

<style>
	.page-footer {
		align-self: end;
	}
</style>
