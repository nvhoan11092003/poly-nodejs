import mongoose from "mongoose";

const { Schema } = mongoose;

const books = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});
books.index({
  description: "text",
  name: "text",
});

export default mongoose.model("books", books);
