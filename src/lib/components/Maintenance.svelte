<script>
	import { contacts } from '$lib/contacts.js';
	import IconSvg from '$lib/components/ui/icon-svg/IconSvg.svelte';

	// «ул. Название» и «д. 9» не должны разрываться при переносе строки
	const address = contacts.address.replace(/(ул\.|д\.) /g, '$1 ');
</script>

<main class="maintenance">
	<article class="maintenance__card">
		<img
			class="maintenance__photo"
			src="/images/excavator-800.webp"
			srcset="
				/images/excavator-420.webp 420w,
				/images/excavator-800.webp 800w,
				/images/excavator.webp 1200w
			"
			sizes="(min-width: 900px) 520px, (max-width: 600px) 100vw, 560px"
			alt=""
			width="800"
			height="400"
			fetchpriority="high"
		/>

		<div class="maintenance__body">
			<h1 class="maintenance__title">Сайт на техническом обслуживании</h1>
			<p class="maintenance__lead">
				Проводим плановое обслуживание сайта, чтобы сделать его быстрее и удобнее. Пожалуйста,
				загляните позже.
			</p>

			<section class="maintenance__contacts" aria-labelledby="contacts-title">
				<h2 id="contacts-title" class="maintenance__subtitle">Связаться с нами</h2>

				<a class="maintenance__phone" href="tel:{contacts.phoneLink}">
					<IconSvg iconId="phone" width={24} fill="primary-color" />
					<span>{contacts.phone}</span>
				</a>

				<ul class="maintenance__list">
					<li>
						<IconSvg iconId="mail" fill="primary-color" />
						<a href="mailto:{contacts.email}">{contacts.email}</a>
					</li>
					<li>
						<IconSvg iconId="location" fill="primary-color" />
						<address>{address}</address>
					</li>
				</ul>
			</section>

			<div class="maintenance__requisites">
				<p>{contacts.company}</p>
				<p>ИНН: {contacts.inn} · ОГРНИП: {contacts.ogrnip}</p>
			</div>
		</div>
	</article>
</main>

<style>
	.maintenance {
		display: grid;
		place-items: center;
		min-height: 100vh;
		min-height: 100dvh;
		padding: 20px;

		background-color: var(--color-page);
		color: var(--color-ink);
		font-family: var(--font-sans);
	}

	.maintenance__card {
		width: 100%;
		max-width: 560px;
		overflow: hidden;

		background-color: var(--white-color);
		border: 1px solid var(--color-card-border);
		border-radius: var(--radius-card);
	}

	.maintenance__photo {
		display: block;
		width: 100%;
		height: 220px;
		object-fit: cover;
	}

	.maintenance__body {
		display: grid;
		gap: 20px;
		padding: 28px 28px 24px;
	}

	.maintenance__title {
		font-size: var(--fs-headline);
		font-weight: 700;
		line-height: 1.2;
		text-wrap: balance;
	}

	.maintenance__lead {
		margin-top: -8px;
		font-size: var(--fs-body);
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 60ch;
	}

	.maintenance__contacts {
		display: grid;
		gap: 14px;
		padding-top: 20px;
		border-top: 1px solid var(--color-hairline);
	}

	.maintenance__subtitle {
		font-size: var(--fs-title);
		font-weight: 700;
	}

	.maintenance__phone {
		display: flex;
		align-items: center;
		gap: 12px;
		width: fit-content;

		font-size: var(--fs-headline);
		font-weight: 700;
		font-variant-numeric: tabular-nums;
		color: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.maintenance__phone:hover {
		color: var(--primary-color);
	}

	.maintenance__list {
		display: grid;
		gap: 8px;
		list-style: none;
		font-size: var(--fs-body);
		line-height: 1.3;
	}

	.maintenance__list li {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.maintenance__list a {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.3s ease;
	}

	.maintenance__list a:hover {
		color: var(--primary-color);
	}

	.maintenance__list address {
		font-style: normal;
	}

	.maintenance__requisites {
		display: grid;
		gap: 2px;
		padding-top: 16px;
		border-top: 1px solid var(--color-hairline);

		font-size: var(--fs-label);
		font-variant-numeric: tabular-nums;
		color: var(--color-muted);
	}

	@media (min-width: 900px) {
		.maintenance__card {
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 1040px;
			min-height: 540px;
		}

		.maintenance__photo {
			height: 100%;
		}

		.maintenance__body {
			align-content: center;
			gap: 24px;
			padding: 56px 56px 48px;
		}

		.maintenance__title {
			font-size: var(--fs-display);
		}

		.maintenance__lead {
			font-size: 18px;
		}

		.maintenance__phone {
			font-size: var(--fs-display);
		}
	}

	@media (max-width: 480px) {
		.maintenance {
			padding: 10px;
		}

		.maintenance__photo {
			height: 160px;
		}

		.maintenance__body {
			padding: 20px 18px 18px;
		}

		.maintenance__phone {
			font-size: var(--fs-title);
		}
	}
</style>
