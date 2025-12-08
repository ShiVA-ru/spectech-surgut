<div class="phone-button-container">
	<a href="tel:+79211234567" class="phone-button">
		<span class="ripple"></span>
		<span class="ripple"></span>
		<span class="ripple"></span>
		<svg class="phone-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
			/>
		</svg>
		<span class="visually-hidden">Позвонить по телефону +79211234567</span>
	</a>
</div>

<style>
	.phone-button-container {
		position: fixed;
		right: 30px;
		bottom: 30px;
	}

	.phone-button {
		position: relative;
		width: 70px;
		height: 70px;
		background: linear-gradient(135deg, lightblue 0%, darkblue 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		z-index: 10;
		animation: pulse 2s infinite;
	}

	.phone-button:hover {
		transform: scale(1.1);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
		animation: none;
	}

	.phone-button:active {
		transform: scale(0.95);
	}

	/* Иконка телефона */
	.phone-icon {
		width: 30px;
		height: 30px;
		fill: white;
		animation: shake 2s infinite;
	}

	.phone-button:hover .phone-icon {
		animation: ring 0.5s ease;
	}

	/* Пульсирующие круги */
	.ripple {
		position: absolute;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		border: 3px solid lightblue;
		opacity: 0;
		animation: ripple-effect 2s infinite;
	}

	.ripple:nth-child(2) {
		animation-delay: 0.5s;
	}

	.ripple:nth-child(3) {
		animation-delay: 1s;
	}

	/* Анимация пульсации кнопки */
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	/* Анимация расходящихся кругов */
	@keyframes ripple-effect {
		0% {
			transform: scale(1);
			opacity: 0.8;
		}
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	/* Анимация покачивания трубки */
	@keyframes shake {
		0%,
		100% {
			transform: rotate(0deg);
		}
		10%,
		30%,
		50% {
			transform: rotate(-10deg);
		}
		20%,
		40% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
	}

	/* Анимация звонка при наведении */
	@keyframes ring {
		0%,
		100% {
			transform: rotate(0deg);
		}
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: rotate(-15deg);
		}
		20%,
		40%,
		60%,
		80% {
			transform: rotate(15deg);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			right: 70px;
		}
		to {
			opacity: 1;
			right: 90px;
		}
	}

	/* Адаптив */
	@media (max-width: 768px) {
		.phone-button {
			width: 60px;
			height: 60px;
		}

		.phone-icon {
			width: 25px;
			height: 25px;
		}
	}
</style>
