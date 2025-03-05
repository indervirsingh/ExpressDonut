"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var food_routes = require('./routes/food.routes');
var user_routes = require('./routes/user.routes');
var order_routes = require('./routes/order.routes');
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
var limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:4200']
}));
app.use(limiter);
app.use('/api/foods', food_routes);
app.use('/api/users', user_routes);
app.use('/api/orders', order_routes);
app.use(express_1.default.static('public'));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
var port = process.env.PORT || 5100;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
});
