<script lang="ts">
	import IconSvg from '../ui/icon-svg/IconSvg.svelte';

	interface Props {
		title: string;
		iconId: string;
	}

	let { title, iconId }: Props = $props();
</script>

<li class="advantage__item">
	<div class="advantage__icon">
		<IconSvg width={25} {iconId} fill="primary-color" />
	</div>
	<h3 class="advantage__title">
		{title}
	</h3>
</li>

<style>
	.advantage__item {
		display: flex;
		gap: 20px;
		align-items: center;
		padding: 15px;

		background-color: rgb(255 255 255 / 0.9);
		border: 1px solid rgb(299 231 235 / 0.8);
		border-radius: 0.5rem;
	}

	.advantage__item {
		font-size: 16px;
		line-height: 1.25;
		font-weight: 600;
	}
</style>
