"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = __importDefault(require("./connect"));
const BookController = __importStar(require("./controllers/book_controller"));
const app = express_1.default();
const port = 5000 || process.env.PORT;
const db = "mongodb://localhost:27017/ts-playground";
connect_1.default(db);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/books', BookController.allbooks);
app.get('/books/:id', BookController.showBook);
app.post('/books', BookController.addBook);
// app.patch('/books/:id', BookController.updateBook);
app.patch("/books/:id", BookController.updateBook);
app.delete('/books/ :id', BookController.deleteBook);
app.listen(port, function connectApp() {
    console.log(`Server is running on port ${port} o!`);
});
//# sourceMappingURL=App.js.map