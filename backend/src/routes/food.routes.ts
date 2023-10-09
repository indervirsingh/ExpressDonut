import { Router } from 'express'
const { getFoods, getFood, getSearch, getTags, getTag } = require('../controllers/food.controller')
const router = Router()

// router.get('/seed', asyncHandler(
//     async(req, res) => {
//         const foodsCount = await FoodModel.countDocuments()
//         if (foodsCount > 0) {
//             res.send("Seed is already done")
//             return
//         }

//         // await FoodModel.create(sample_foods)
//         res.send("Seed is done")
//     })
// )

router.get('/', getFoods)

router.get('/search/:searchTerm', getSearch)

router.get('/tags', getTags)

router.get('/tag/:tagName', getTag)
  
router.get('/:foodId', getFood)

export default router