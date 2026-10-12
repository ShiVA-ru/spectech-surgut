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

		background-color: var(--color-surface);
		border: 1px solid var(--color-card-border);
		border-radius: var(--radius-card);
	}

	.advantage__item {
		font-size: var(--fs-body);
		line-height: 1.25;
		font-weight: 600;
	}
</style>
