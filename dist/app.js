"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', product_route_1.productRouts);
app.use('/', (req, res) => {
    res.send('welcome to e-commerce server');
    // res.status(200).json({
    //     success: true,
    //     message: 'Welcome to e-commerce server'
    // })
});
exports.default = app;
