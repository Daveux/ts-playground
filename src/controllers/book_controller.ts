import { Request, Response} from "express";

import  Book from "../models/books";

export const allbooks = function(req: Request, res: Response) {
Book.find({})
    .then(function bookFound(books: any) {
        res.send(books);
    })
    .catch(function bookNotFound(err: any) {
        res.send(err);
    })
}

export const 
Book.findById()
    .then()