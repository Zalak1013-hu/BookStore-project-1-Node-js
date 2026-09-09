import { Router } from "express";
import {createData, deleteData, getallData, updateData} from "../controllers/bookstore.controller.js";
import bookValidation from "../middlewares/book.middleware.js";

export const bookstoreRouter = Router();

bookstoreRouter.post("/", bookValidation, createData);

bookstoreRouter.get("/", getallData);

bookstoreRouter.delete("/:id", deleteData);

bookstoreRouter.patch("/:id", updateData);

export default bookstoreRouter;
