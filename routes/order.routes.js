"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
var order_controller = require('../controllers/order.controller');
var router = (0, express_1.Router)();
router.use(auth_mid_1.default);
router.get('/', order_controller.getOrders);
router.post('/create', order_controller.createOrder);
router.get('/newOrderForCurrentUser', order_controller.getCurrentOrder);
router.post('/pay', order_controller.pay);
router.get('/track/:id', order_controller.getOrder);
module.exports = router;
