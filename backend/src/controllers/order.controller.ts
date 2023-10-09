import asyncHandler from 'express-async-handler'
import { OrderModel } from '../models/order.model'
import { OrderStatus } from '../constants/order_status'
import { HTTP_BAD_REQUEST } from '../constants/http_status'

function getOrders(req: any, res: any) {
    asyncHandler( async (req, res) => {
        const orders = await OrderModel.find()
        res.send(orders)
    })
}

function getCurrentOrder(req: any, res: any) {
    asyncHandler( async (req: any, res) => {
        const order = await getNewOrderForCurrentUser(req)

        if (order) res.send(order)
        else res.status(HTTP_BAD_REQUEST).send()
    })
}

function getOrder(req: any, res: any) {
    asyncHandler( async (req, res) => {
        const orderId = req.params.id
        const order = await OrderModel.findById(orderId)
        res.send(order)
    })
}

function createOrder(req: any, res: any) {
    asyncHandler( async (req: any, res: any) => {
        const requestOrder = req.body

        if (requestOrder.items.length <= 0) {
            res.status(HTTP_BAD_REQUEST).send('Cart is Empty')
            return
        }

        await OrderModel.deleteOne({
            user: req.user.id,
            status: OrderStatus.NEW
        })

        const newOrder = new OrderModel({ ...requestOrder, user: req.user.id })
        await newOrder.save()

        res.send(newOrder)
    })
}

function pay(req: any, res: any) {
    asyncHandler( async (req, res) => {
        const { paymentId } = req.body
        const order = await getNewOrderForCurrentUser(req)

        if (!order) {
            res.status(HTTP_BAD_REQUEST).send('Order Not Found!')
            return
        }

        order.paymentId = paymentId
        order.status = OrderStatus.PAYED
        await order.save()
        res.send(order._id)
    })
}

async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}

module.exports = {
    getOrder,
    getOrders,
    getCurrentOrder,
    createOrder,
    pay
}