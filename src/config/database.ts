import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = (text: string, params?: any[]) => {
    return pool.query(text, params)
}
export { pool }
