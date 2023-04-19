import Joi from "joi";
import users from "../models/user";

const usersSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required().min(6),
  repassword: Joi.ref("password"),
});

export const createUser = async (req, res) => {
  try {
    const body = req.body;
    const { error } = usersSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await users.create(body);
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

const usersignSchema = Joi.object({
  email: Joi.string().required,
  password: Joi.string().required,
});

export const signinUser = async (req, res) => {
  try {
    const body = req.body;
    const { error } = usersignSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const user = await users.findOne({ email: body.email });
      res.send({
        message: "dang nhap successfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};
