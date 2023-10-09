import { Router } from "express"
import auth from '../middlewares/auth.mid'
const { getOrder, getOrders, getCurrentOrder, createOrder, pay } = require('../controllers/order.controller')

const router = Router()
router.use(auth)

router.get('/', getOrders)

router.post('/create', createOrder)

router.get('/newOrderForCurrentUser', getCurrentOrder)

router.post('/pay', pay)

router.get('/track/:id', getOrder)

export default router

