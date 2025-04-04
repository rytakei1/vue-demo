import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '~/server/db';
import { oneTap } from 'better-auth/plugins';
export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg' // or "mysql", "sqlite"
	}),
	plugins: [oneTap()],
	socialProviders: {
		google: {
			clientId: process.env.NUXT_GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET || ""
		}
	}
});
