import { defineConfig } from 'drizzle-kit'
import * as dotenv from "dotenv"

dotenv.config({
    path: ".env",
})
export default defineConfig({
    schema: "./drizzle/schema.ts",
    out: "./drizzle/out",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_URL!,
    },
    verbose: true,
    strict: true,
})