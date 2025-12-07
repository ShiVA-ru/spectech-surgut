<script lang="ts">
	import IconSvg from '../ui/icon-svg/IconSvg.svelte';

	interface Props {
		id: number;
		title: string;
		iconId: string;
	}

	let { id, title, iconId }: Props = $props();
</script>

<li class="card-advantage">
	<div class="card-advantage__icon">
		<IconSvg width={25} {iconId} fill="primary-color" />
	</div>
	<div class="card-advantage__title">
		{title}
	</div>
</li>

<style>
	.card-advantage {
		display: flex;
		gap: 20px;
		align-items: center;
		padding: 10px;

		font-size: 14px;
		line-height: 1.25;
		font-weight: 600;
		background-color: rgb(255 255 255 / 0.9);
		border: 1px solid rgb(299 231 235 / 0.8);
		border-radius: 0.5rem;
	}
</style>
