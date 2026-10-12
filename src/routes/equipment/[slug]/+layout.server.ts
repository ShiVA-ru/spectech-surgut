import { error } from '@sveltejs/kit';
import { equipments } from '#lib/assets/store/data.js';

export function load({ params }) {
	const equipment = equipments.find((item) => item.id === Number(params.slug));

	if (!equipment) {
		throw error(404, 'Страница не найдена');
	}

	return { equipment };
}
