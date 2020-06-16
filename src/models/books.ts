import mongoose, {Schema, Document} from "mongoose";

export interface BookInterface extends Document {
    author: string,
    title: string
}

let BookSchema: Schema = new Schema({
    author: String,
    title: String
})

let Book =  mongoose.model<BookInterface>("Book", BookSchema);

export default Book;

