import express from 'express'
import cors from 'cors'
import { foods } from './data'

const app = express()

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.get('/api/foods', (req, res) => {
    res.send(foods)
})

app.get('/api/foods/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm
    const foodsArray = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foodsArray)
})

const port = 5000
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})