/**
 * Каталог техники.
 *
 * specs            — характеристики: [{ label, value }]
 * pricePerHour     — стоимость работы за час, ₽ (null — уточняется по телефону)
 * minRentalHours   — минимальный срок аренды, часов (null — уточняется по телефону)
 * deliveryPerKm    — доставка за 1 км, ₽, действует только за пределами г. Сургут
 *                    (null — уточняется по телефону)
 */
const equipments = [
	{
		id: 1,
		title: 'Гусеничный миниэкскаватор',
		description: 'Ковш 0.5 м³',
		url: '/images/catalog/mini-excavator.webp',
		specs: [{ label: 'Объём ковша', value: '0.5 м³' }],
		pricePerHour: null,
		minRentalHours: null,
		deliveryPerKm: null
	},
	{
		id: 2,
		title: 'Фронтальный погрузчик',
		description: 'Грузоподъемность: 3 т',
		url: '/images/catalog/loader.webp',
		specs: [{ label: 'Грузоподъёмность', value: '3 т' }],
		pricePerHour: null,
		minRentalHours: null,
		deliveryPerKm: null
	},
	{
		id: 3,
		title: 'Кран-манипулятор',
		description: 'Грузоподъемность: 5 т',
		url: '/images/catalog/crane.webp',
		specs: [{ label: 'Грузоподъёмность', value: '5 т' }],
		pricePerHour: null,
		minRentalHours: null,
		deliveryPerKm: null
	},
	{
		id: 4,
		title: 'Эвакуатор',
		description: 'Грузоподъемность: 5 т',
		url: '/images/catalog/tow-truck.webp',
		specs: [{ label: 'Грузоподъёмность', value: '5 т' }],
		pricePerHour: null,
		minRentalHours: null,
		deliveryPerKm: null
	}
];

export { equipments };
