import pg from "pg";

const { Pool } = pg;

export const connection = new Pool({
    host: process.env.HOST,
    port: 5432,
    user: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE_URL
});

export default connection;