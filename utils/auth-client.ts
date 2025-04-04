import { createAuthClient } from 'better-auth/svelte';
import { oneTapClient } from 'better-auth/client/plugins';
export const authClient = createAuthClient({
	baseURL: 'http://localhost:3000',
	plugins: [
		oneTapClient({
			clientId: '72950970700-g40ee8il3t0in0hbkorrlc3eg9vo4im3.apps.googleusercontent.com'
		})
	]
});
