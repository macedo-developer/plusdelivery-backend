"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3003;
app.get("/", function (req, res) {
    res.send("Hello pesso!");
});
app.listen(port, function (err) {
    if (err)
        return console.error(err);
    return console.log("Server is listening on " + port);
});
