<script>
	import IconSvg from './icon-svg/IconSvg.svelte';
</script>

<a href="tel:+79211234567" class="call">
	<IconSvg iconId="phone-solid" width={30} />
	<span class="visually-hidden">Позвонить по телефону +79211234567</span>
</a>

<style>
	.call {
		position: fixed;
		bottom: 30px;
		right: 30px;

		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;

		border-radius: 50%;
		background-color: transparent;
		opacity: 0.6;
		color: var(--primary-color);
		border: 2px solid var(--primary-color);

		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			rotate 0.3s ease;
	}

	.call:hover {
		background-color: var(--primary-color);
		color: #fff;

		rotate: 90deg;
	}
</style>
