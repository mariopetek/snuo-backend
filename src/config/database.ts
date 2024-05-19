import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export const query = (text: string, params?: string[]) => {
    return pool.query(text, params)
}
export { pool }; 