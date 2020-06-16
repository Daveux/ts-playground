"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 5000 || process.env.PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', function getHomeRoute(req, res, next) {
    res.send("Hello World");
});
app.listen(port, function connectApp() {
    console.log(`Server is running on port ${port} o!`);
});
//# sourceMappingURL=App.js.map