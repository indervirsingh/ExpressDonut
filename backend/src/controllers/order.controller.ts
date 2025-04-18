import asyncHandler from 'express-async-handler'
import { OrderModel } from '../models/order.model'
import { OrderStatus } from '../constants/order_status'
import { HTTP_BAD_REQUEST } from '../constants/http_status'

exports.getOrders = asyncHandler( async (req, res) => {
    const orders = await OrderModel.find()
    res.send(orders)
})


exports.getCurrentOrder = asyncHandler( async (req: any, res) => {
    const order = await getNewOrderForCurrentUser(req)

    if (order) res.send(order)
    else res.status(HTTP_BAD_REQUEST).send()
})


exports.getOrder = asyncHandler( async (req, res) => {
    const orderId = req.params.id
    const order = await OrderModel.findById(orderId)
    res.set('content-type', 'application/json; charset=utf-8')
    res.send(order)
})


exports.createOrder = asyncHandler( async (req: any, res: any) => {
    const requestOrder = req.body

    if (!Array.isArray(requestOrder.items) || requestOrder.items.length <= 0) {
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

exports.pay = asyncHandler( async (req, res) => {
    const { paymentId } = req.body
    const order = await getNewOrderForCurrentUser(req)

    if (!order) {
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!')
        return
    }

    order.paymentId = paymentId
    order.status = OrderStatus.PAYED
    await order.save()
    res.set('content-type', 'application/json; charset=utf-8')
    res.send(order._id)
})


async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}
