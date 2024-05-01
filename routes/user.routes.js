"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller = require('../controllers/user.controller');
var router = (0, express_1.Router)();
// router.get('/seed', asyncHandler(
//     async(req, res) => {
//         const usersCount = await UserModel.countDocuments()
//         if (usersCount > 0) {
//             res.send("Seed is already done")
//             return
//         }
//         // await UserModel.create(sample_users)
//         res.send("Seed is done")
//     })
// )
router.post('/login', user_controller.login);
router.post('/register', user_controller.register);
module.exports = router;
