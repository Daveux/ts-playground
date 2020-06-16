import express, {Application, Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import connect from "./connect";

const app: Application = express();

const port: number = 5000 || process.env.PORT;

const db: string = "mongodb://localhost:27017/ts-playground";

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use()

app.get('/', function getHomeRoute(req: Request, res: Response, next: NextFunction) {
    res.send("Hello World");
});

app.listen (port, function connectApp () {
    console.log(`Server is running on port ${port} o!`);
});