import express from "express";
const bookRouter = express.Router();

import {
  getallbook,
  deletebook,
  createbook,
  updatebook,
} from "../controller/books";

bookRouter.get("/getall", getallbook);
bookRouter.post("/create", createbook);
// bookRouter.get("/books/:id", getAll);
bookRouter.put("/:id", updatebook);
bookRouter.delete("/:id", deletebook);
export default bookRouter;
