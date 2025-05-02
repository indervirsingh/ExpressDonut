import dotenv from 'dotenv'
dotenv.config()

import path from 'path'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import food_routes from './routes/food.routes.js'
import user_routes from './routes/user.routes.js'
import order_routes from './routes/order.routes.js'
import { dbConnect } from './configs/database.config.js'

dbConnect()

const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
})

app.use(cors())
app.use(express.json())
app.use(helmet())
app.set('trust proxy', 1)

app.use(limiter)
app.use('/api/foods', food_routes)
app.use('/api/users', user_routes)
app.use('/api/orders', order_routes)

// Serve frontend build files
app.use(express.static(path.join(__dirname, '../built')))

// Catch-all route for frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../built/index.html'))
})

const port = process.env.PORT || 5100
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port)
})