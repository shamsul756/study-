import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins"


// 1. Create the configured instance
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [ jwtClient() ]
})

// 2. Destructure from YOUR authClient instance, NOT createAuthClient()
export const { signIn, signUp, signOut, useSession } = authClient;