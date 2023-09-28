import express from 'express'
import cors from 'cors'
import { foods, sample_users, tags } from './data'
import jwt from 'jsonwebtoken'
import foodRouter from './routers/food.router'

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.use('/api/foods', foodRouter)

app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body
    const user = sample_users.find(user => user.email === email && user.password === password)

    if (user) {
        res.send(generateTokenResponse(user))
    } else {
        res.status(400).send("Username or Password is invalid!")
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    })

    user.token = token
    return user
}

const port = 5000
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})