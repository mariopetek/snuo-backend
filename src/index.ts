import dotenv from 'dotenv'
import express from 'express'
import { itemRouter } from './routes/itemRoutes'
import { restaurantRouter } from './routes/restaurantRoutes'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('SNUO API')
})

app.use('/api/items', itemRouter)
app.use('/api/restaurants', restaurantRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`)
})
