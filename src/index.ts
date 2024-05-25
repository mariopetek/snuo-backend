import dotenv from 'dotenv'
import express from 'express'
import { itemRouter } from './routes/itemRoutes'
import { restaurantRouter } from './routes/restaurantRoutes'
import { errorHandler } from './middleware/errorHandler'
import { orderRouter } from './routes/orderRoutes'
import { employeeRouter } from './routes/employeeRoutes'
import { tableRouter } from './routes/tableRoutes'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the SNUO API!' })
})

app.use('/api/items', itemRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/orders', orderRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/tables', tableRouter)

app.use(errorHandler)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running: http://localhost:${port}`);
    });
}

export default app
