<script>
	import { contacts } from '#lib/contacts.js';
</script>

<section class="requisites">
	<h3 class="requisites__title">Реквизиты</h3>
	<h4 class="requisites__legal-name">{contacts.company}</h4>
	<dl class="requisites__content">
		<div class="requisites__item">
			<dt>ИНН:</dt>
			<dd>{contacts.inn}</dd>
		</div>
		<div class="requisites__item">
			<dt>ОГРНИП:</dt>
			<dd>{contacts.ogrnip}</dd>
		</div>
		<div class="requisites__item">
			<dt>Юр. адрес:</dt>
			<dd>г. Сургут, ул.&nbsp;Иосифа Каролинского, д.&nbsp;9</dd>
		</div>
	</dl>
</section>

<style>
	.requisites__title {
		margin-bottom: 10px;

		font-size: var(--fs-title);
		font-weight: bold;
	}

	.requisites__legal-name {
		margin-bottom: 10px;
		font-size: var(--fs-body);
		font-weight: bold;
	}

	.requisites__content {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.requisites__item {
		display: grid;
		grid-template-columns: 80px 1fr;
		justify-content: space-between;
		gap: 15px;

		font-size: var(--fs-label);
	}

	.requisites__item dt {
		font-weight: bold;
	}
</style>
