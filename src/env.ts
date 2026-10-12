import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	IS_MAINTENANCE: {
		description: 'Show the maintenance page instead of the site',
		schema: (value) => {
			const v = (value ?? 'false').trim().toLowerCase();
			if (v !== 'true' && v !== 'false')
				throw new Error('IS_MAINTENANCE must be "true" or "false"');
			return v === 'true';
		}
	},
	DATABASE_URL: {
		description: 'PostgreSQL connection string (not used by any route yet)',
		schema: (value) => value || undefined
	}
});
