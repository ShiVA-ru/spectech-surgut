<script>
	import Contacts from '$lib/components/footer/Contacts.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Requisites from '$lib/components/footer/Requisites.svelte';
</script>

<footer class="bg-white page-footer">
	<div class="container page-footer__container">
		<Contacts />
		<Divider />
		<Requisites />
	</div>
</footer>

<style>
	.page-footer {
		align-self: end;
	}

	.page-footer__container {
		display: grid;
		gap: 16px;
		margin-inline: auto;
		padding: 20px;

		@media (min-width: 768px) {
			grid-template-columns: 1fr min-content 1fr;
		}
	}
</style>
