"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.showBook = exports.allbooks = void 0;
const books_1 = __importDefault(require("../models/books"));
exports.allbooks = function (req, res) {
    console.log(req.params);
    books_1.default.find({})
        .then(function bookFound(books) {
        res.send(books);
    })
        .catch(function bookNotFound(err) {
        res.send(err);
    });
};
exports.showBook = function (req, res) {
    books_1.default.findById(req.params.id)
        .then(function (book) {
        res.send(book);
    })
        .catch(function (err) {
        res.send(err);
    });
};
exports.addBook = function (req, res) {
    books_1.default.create(req.body)
        .then(function (book) {
        res.send(book);
    })
        .catch(function (err) {
        res.send(err);
    });
};
exports.updateBook = function (req, res) {
    console.log("Gotten updateBook endpoint");
    books_1.default.findByIdAndUpdate(req.params.id, req.body)
        .then(function (book) {
        res.send(book);
    })
        .catch(function (err) {
        res.send(err);
    });
};
exports.deleteBook = function (req, res) {
    books_1.default.deleteOne({ _id: req.params.id })
        .then(function () {
        res.send("Book ceases to exist on database");
    })
        .catch(function (err) {
        res.send(err);
    });
};
//# sourceMappingURL=book_controller.js.map