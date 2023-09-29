import { Router } from 'express'
import { foods, tags } from '../data'
import asyncHandler from 'express-async-handler'
import { FoodModel } from '../models/food.model'

const router = Router()

router.get('/seed', asyncHandler(
    async(req, res) => {
        const foodsCount = await FoodModel.countDocuments()
        if (foodsCount > 0) {
            res.send("Seed is already done")
            return
        }

        await FoodModel.create(foods)
        res.send("Seed is done")
    })
)


router.get('/', asyncHandler(
    async (req, res) => {
        const foodsArray = await FoodModel.find()
        res.send(foodsArray)
    })
)

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