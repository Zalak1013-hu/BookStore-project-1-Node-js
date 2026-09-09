import { body } from "express-validator";

const bookValidation = [
  body("title").notEmpty().withMessage("Title is required"),

  body("author").notEmpty().withMessage("Author is required"),

  body("category").notEmpty().withMessage("Category is required"),

  body("price").notEmpty().withMessage("Price is required"),

  body("quantity").notEmpty().withMessage("Quantity is required"),

  body("description").notEmpty().withMessage("Description is required"),

  body("publishedYear").notEmpty().withMessage("Published Year is required"),
];

export default bookValidation;
