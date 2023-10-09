import { Router } from 'express'
const { login, register } = require('../controllers/user.controller')
const router = Router()

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

router.post('/login', login)
router.post('/register', register)

export default router
