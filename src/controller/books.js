import Joi from "joi";
import books from "../models/books";

const bookSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  publisher: Joi.string().required(),
  author: Joi.string().required(),
});

export const createbook = async (req, res) => {
  try {
    const body = req.body;
    const { error } = bookSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await books.create(body);
      res.send({
        message: "Create successfully",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export const updatebook = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { error } = bookSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await books.findByIdAndUpdate(id, body);
      const book = await books.findById(id);
      res.send({
        message: "Updata successfully",
        data: book,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export const deletebook = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await books.findByIdAndRemove(id);
    if (!data) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      res.send({
        message: "delete successfully",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export const getallbook = async (req, res) => {
  try {
    const data = await books.find();

    if (!data) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      res.send({
        message: "get books successfully",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};
