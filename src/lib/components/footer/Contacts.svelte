<script>
	import IconSvg from '$lib/components/ui/icon-svg/IconSvg.svelte';
</script>

<section class="contacts">
	<h3 class="contacts__title">Контакты</h3>
	<div class="contacts__content">
		<a href="tel:+79211234567" class="contacts__item contacts__link">
			<IconSvg iconId="phone" />
			<span>+7&nbsp(912)&nbsp815-95-44</span>
		</a>
		<a href="mailto:info@spectech-surgut.ru" class="contacts__item contacts__link">
			<IconSvg iconId="mail" />
			<span>info@spectech-surgut.ru</span>
		</a>

		<address class="contacts__item contacts__address">
			<IconSvg iconId="location" />
			<span>г. Сургут, ул.&nbsp;Иосифа Каролинского, д.&nbsp;9</span>
		</address>
	</div>
</section>

<style>
	.contacts__title {
		font-size: 20px;
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
