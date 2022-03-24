require("dotenv").config();
import Users from "../Models/Users";
import addMessage from "../../helpers/addMessage";
const bcryptjs = require("bcryptjs");
import jwt from 'jsonwebtoken';
import parseFetch from "../../helpers/parseFetch";


export const CreateUser = async (data) => {
  try {
    const { name, username, password, email } = data;
    const passwordHash = await bcryptjs.hash(password.trim(), 8);
    const newData = {
      name: name.trim(),
      username: username.trim(),
      password: passwordHash,
      email: email.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const User = await Users.create(newData);
    const parse = await parseFetch(User);
    return parse;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}

export const Login = async (data) => {
  try {
    const { username, password } = data;
    const User = await Users.findOne({ where: { username: username } });
    if (!!User) {
      const parse = await parseFetch(User);
      const verify = await bcryptjs.compare(password, parse.password)
      if (verify) {
        const userForToken = {
          id: parse.id,
          username: parse.username,
        }
        const token = jwt.sign(userForToken, process.env.SECRET)
        return { name: parse.name, token: token, role: parse.role };
      } else {
        return addMessage("Usuario o Contraseña incorrecta.", 404);
      }
    } else {
      return addMessage("Usuario o Contraseña incorrecta.", 404);
    }
  } catch (error) {
    return addMessage(error.message, 404);
  }
}