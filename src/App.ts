import express, {Application, Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import connect from "./connect";
import * as BookController from "./controllers/book_controller";

const app: Application = express();

const port: number = 5000 || process.env.PORT;

const db: string = "mongodb://localhost:27017/ts-playground";

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/books', BookController.allbooks);
app.get('/books/:id', BookController.showBook);
app.post('/books', BookController.addBook);
// app.patch('/books/:id', BookController.updateBook);

app.patch("/books/:id", BookController.updateBook);

app.delete('/books/ :id', BookController.deleteBook);

app.listen (port, function connectApp () {
    console.log(`Server is running on port ${port} o!`);
});