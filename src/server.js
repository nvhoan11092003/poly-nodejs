import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bookRouter from "./router/books";
import usersRouter from "./router/user";

const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/books/", bookRouter);
app.use("/users/", usersRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/baithi")
  .then(() => console.log("Connected to DB"));

app.listen(port, () => {
  console.log("Server is running on " + port);
});
