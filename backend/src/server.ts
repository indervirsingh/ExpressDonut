import dotenv from 'dotenv'
dotenv.config()

import path from 'path'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
const food_routes = require('./routes/food.routes')
const user_routes = require('./routes/user.routes')
const order_routes = require('./routes/order.routes')
import { dbConnect } from './configs/database.config'

dbConnect()

const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use(express.json())
app.use(helmet())
app.use(cors())
app.set('trust proxy', 1);

app.use(limiter);
app.use('/api/foods', food_routes)
app.use('/api/users', user_routes)
app.use('/api/orders', order_routes)


app.use(express.static('public'));
app.use(helmet())
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5100
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})