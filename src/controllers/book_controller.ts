import { Request, Response} from "express";

import  Book from "../models/books";

export const allbooks = function(req: Request, res: Response) {
    console.log(req.params);
    Book.find({})
        .then(function bookFound(books: any) {
            res.send(books);
        })
        .catch(function bookNotFound(err: any) {
            res.send(err);
        })
}

export const showBook = function(req: Request, res: Response) {
    Book.findById(req.params.id)
        .then(function(book: any) {
            res.send(book);
        })
        .catch(function (err: any) {
            res.send(err);
        })
}

export const addBook = function(req: Request, res: Response) {
    Book.create(req.body)
        .then(function(book: any) {
            res.send(book);
        })
        .catch(function (err: any) {
            res.send(err);
        })
}

export const updateBook = function(req: Request, res: Response) {
    console.log("Gotten updateBook endpoint");
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(function(book: any) {
            res.send(book);
        })
        .catch(function (err: any) {
            res.send(err);
        })
}

export const deleteBook = function(req: Request, res: Response) {
    Book.deleteOne({_id: req.params.id})
        .then(function() {
            res.send("Book ceases to exist on database");
        })
        .catch(function (err: any) {
            res.send(err);
        })
}
