import express from 'express'
import cors from 'cors'
import { foods, tags } from './data'

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

// Routes
app.get('/api/foods', (req, res) => {
    res.send(foods)
})

app.get('/api/foods/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm
    const foodsArray = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foodsArray)
})

app.get('/api/foods/tags', (req, res) => {
    res.send(tags)
})

app.get('/api/foods/tag/:tagName', (req, res) => {
    const tagName = req.params.tagName
    const foodsArray = foods.filter(food => food.tags?.includes(tagName))
    res.send(foodsArray)
})

app.get('/api/foods/:foodId', (req, res) => {
    const foodId = req.params.foodId
    const food = foods.find(food => food.id == foodId)
    res.send(food)
})

const port = 5000
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);

})