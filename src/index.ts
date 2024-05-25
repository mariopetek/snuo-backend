import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { itemRouter } from './routes/itemRoutes'
import { restaurantRouter } from './routes/restaurantRoutes'
import { errorHandler } from './middleware/errorHandler'
import { orderRouter } from './routes/orderRoutes'
import { tableRouter } from './routes/tableRoutes'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
    origin: process.env.CLIENT_URL,
}

app.use(cors(corsOptions))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the SNUO API!' })
})

app.use('/api/items', itemRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/orders', orderRouter)
app.use('/api/tables', tableRouter)

app.use(errorHandler)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running: http://localhost:${port}`)
    })
}

export default app
