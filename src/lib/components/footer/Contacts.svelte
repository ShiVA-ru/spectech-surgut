<script>
	import IconSvg from '#lib/components/ui/icon-svg/IconSvg.svelte';
	import { contacts } from '#lib/contacts.js';
</script>

<section class="contacts">
	<h3 class="contacts__title">Контакты</h3>
	<div class="contacts__content">
		<a href="tel:{contacts.phoneLink}" class="contacts__item contacts__link">
			<IconSvg iconId="phone" />
			<span>{contacts.phoneNbsp}</span>
		</a>
		<a href="mailto:{contacts.email}" class="contacts__item contacts__link">
			<IconSvg iconId="mail" />
			<span>{contacts.email}</span>
		</a>

		<address class="contacts__item contacts__address">
			<IconSvg iconId="location" />
			<span>г. Сургут, ул.&nbsp;Иосифа Каролинского, д.&nbsp;9</span>
		</address>
	</div>
</section>

<style>
	.contacts__title {
		font-size: var(--fs-title);
		font-weight: bold;
		margin-bottom: 10px;
	}

	.contacts__content {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.contacts__item {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.contacts__address {
		font-style: unset;
	}

	a.contacts__item {
		text-decoration: underline;
		transition: color 0.3s ease;
	}

	a.contacts__item:hover {
		color: var(--primary-color);
	}
</style>
