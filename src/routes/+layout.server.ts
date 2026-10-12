// export const prerender = true;
import {IS_MAINTENANCE} from '$app/env/private';

export const load = () => ({
	isMaintenance: IS_MAINTENANCE,
})