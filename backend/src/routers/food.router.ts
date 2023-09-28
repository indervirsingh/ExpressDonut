import { Router } from 'express'
import { foods, tags } from '../data'

const router = Router()

router.get('', (req, res) => {
    res.send(foods)
})

router.get('/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm
    const foodsArray = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foodsArray)
})

router.get('/tags', (req, res) => {
    res.send(tags)
})

router.get('/tag/:tagName', (req, res) => {
    const tagName = req.params.tagName
    const foodsArray = foods.filter(food => food.tags?.includes(tagName))
    res.send(foodsArray)
})

router.get('/:foodId', (req, res) => {
    const foodId = req.params.foodId
    const food = foods.find(food => food.id == foodId)
    res.send(food)
})

export default router