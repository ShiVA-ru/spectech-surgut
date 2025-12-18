export const prerender = true;

const equipments: Record<string, []> = {
	excavator: [],
	bulldozer: [],
	loader: []
};

// Функция для получения всех возможных параметров
export async function entries() {
	// Верните массив объектов с параметрами для каждой страницы
	return [
		{ slug: 'excavator' },
		{ slug: 'bulldozer' },
		{ slug: 'loader' }
		// ... все ваши slug'и
	];
}

export async function load({ params }) {
	const { slug } = params;

	// Ваша логика загрузки данных
	const equipment = equipments[slug];

	return {
		equipment
	};
}
