import { Request, Response} from "express";

import  Book from "../models/books";

Book.find({})
    .then(function bookFound() {

    })