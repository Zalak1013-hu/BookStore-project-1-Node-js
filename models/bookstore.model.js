import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,

  author: String,

  category: String,

  price: Number,

  quantity: Number,

  description: String,

  publishedYear: String,
});

const Book = mongoose.model("book", bookSchema);

export default Book;
