import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema"

const pool = new Pool({
    connectionString: process.env.DRIZZLE_URL,
    max: 1
});

export const db = drizzle(pool, { schema, logger: true });