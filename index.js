import express from "express";
import database from "./configs/database.js";
import bookstoreRouter from "./routes/bookstore.route.js";

const port = 8081;

const app = express();

app.use(express.json());

app.use("/api/bookstore", bookstoreRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started.");
    console.log(`http://localhost:${port}`);
  }
});
