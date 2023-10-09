import { Router } from "express"
import auth from '../middlewares/auth.mid'
const order_controller  = require('../controllers/order.controller')

const router = Router()
router.use(auth)

router.get('/', order_controller.getOrders)

router.post('/create', order_controller.createOrder)

router.get('/newOrderForCurrentUser', order_controller.getCurrentOrder)

router.post('/pay', order_controller.pay)

router.get('/track/:id', order_controller.getOrder)

export default router

