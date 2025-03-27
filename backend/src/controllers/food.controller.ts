import asyncHandler from "express-async-handler"
import { FoodModel } from "../models/food.model"

exports.getFoods = asyncHandler( async (req, res) => {
    const foods = await FoodModel.find()
    res.send(foods)
})

exports.getFood = asyncHandler( async (req, res) => {
    const foodId = req.params.foodId
    const food = await FoodModel.findById(foodId)
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send(food)
})


exports.getSearch = asyncHandler( async (req, res) => {
    const searchRegex = new RegExp(escapeRegex(req.params.searchTerm), 'i')
    const foods = await FoodModel.find({ name: {$regex: searchRegex }})
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send(foods)
})
function escapeRegex(string) { return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }


exports.getTags = asyncHandler( async (req, res) => {
    // 2 foods 3 tags, unwind tags => 6 foods tags 1
    const tags = await FoodModel.aggregate([
        {
            $unwind: '$tags'
        },
        {
            $group: {
                _id: '$tags',
                count: {$sum: 1}
            }
        },
        {
            $project: {
                _id: 0,
                name: '$_id',
                count: '$count'
            }
        }
    ]).sort({ count: -1 }) // Ascending

    const all = {
        name: 'All',
        count: await FoodModel.countDocuments()
    }

    tags.unshift(all) // Added to the beginning of tags
    res.send(tags)
})


exports.getTag = asyncHandler( async (req, res) => {
    const foods = await FoodModel.find({tags: req.params.tagName })
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send(foods)
})
