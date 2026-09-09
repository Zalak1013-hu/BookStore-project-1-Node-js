import Book from "../models/bookstore.model.js";
import { validationResult } from "express-validator";

export const createData = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const book = await Book.create(req.body);

    return res.json({
      message: "Book Published",
      data: book,
    });
  } catch (error) {
    console.error(error.message);
    return res.json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getallData = async (req, res) => {
  try {
    const Search = req.query.search || "";

    let Sort = req.query.sort || "";
    let Sortval = 1;

    if (Sort === "desc") {
      Sortval = -1;
    }

    const book = await Book.find({
      title: { $regex: Search, $options: "i" },
    }).sort({ title: Sortval });

    return res.json(book);
  } catch (error) {
    console.log(error.message);

    return res.json({
      message: error.message,
    });
  }
};

export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Book.findByIdAndDelete(id);

    return res.json({ message: "book deleted", bookId: data.id });
  } catch (error) {
    console.log(error.message);

    return res.json({ message: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Book.findByIdAndUpdate(id, req.body);

    return res.json({ message: "Book update", bookId: data.id });
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message });
  }
};
