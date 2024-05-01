"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var food_controller = require('../controllers/food.controller');
var router = (0, express_1.Router)();
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
router.get('/', food_controller.getFoods);
router.get('/search/:searchTerm', food_controller.getSearch);
router.get('/tags', food_controller.getTags);
router.get('/tag/:tagName', food_controller.getTag);
router.get('/:foodId', food_controller.getFood);
module.exports = router;
