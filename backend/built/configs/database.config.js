"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)(process.env.MONGO_URI || 'mongodb+srv://indervirsingh:JIG5I8Ok12gRfREC@emails.gfxdggc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("connected successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
