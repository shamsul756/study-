import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins"


// 1. Create the configured instance
export const authClient = createAuthClient({
    baseURL:process.env.BETTER_AUTH_URL,
    plugins: [ jwtClient() ]
})

// 2. Destructure from YOUR authClient instance, NOT createAuthClient()
export const { signIn, signUp, signOut, useSession } = authClient;