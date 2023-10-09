import dotenv from 'dotenv'
dotenv.config()

import path from 'path'
import express from 'express'
import cors from 'cors'
const food_routes = require('./routes/food.routes')
const user_routes = require('./routes/user.routes')
const order_routes = require('./routes/order.routes')
import { dbConnect } from './configs/database.config'

dbConnect()

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.use('/api/foods', food_routes)
app.use('/api/users', user_routes)
app.use('/api/orders', order_routes)


app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = 5000
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})