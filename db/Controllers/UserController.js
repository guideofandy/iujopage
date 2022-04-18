require("dotenv").config();
import Users from "../Models/Users";
import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
const bcryptjs = require("bcryptjs");
import jwt from 'jsonwebtoken';
import parseFetch from "../../helpers/parseFetch";
const {Sequelize} = require('sequelize');
require("../relations")

export const getUsers = async () => {
  try {
    const users = await Users.findAll({attributes: ['id', 'name', 'email', 'username', 'status']});
    const content = await JSON.parse(JSON.stringify(users));
    return content;
  } catch (e) {
    return addMessage(e.message, 404);
  }
}

export const CreateUser = async (data) => {
  try {
    const {name, username, password, email} = data;
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
    const {username, password} = data;
    const User = await Users.findOne({where: {username: username}});
    if (!!User) {
      const parse = await parseFetch(User);
      const verify = await bcryptjs.compare(password, parse.password)
      if (verify) {
        const userForToken = {
          id: parse.id,
          username: parse.username,
          role: parse.role,
        }
        const token = jwt.sign(userForToken, process.env.SECRET)
        return {name: parse.name, token}
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

export const getUsersPostsReports = async () => {
  try {
    const response = await Users.findAll({attributes: ['id', 'name', 'email'], include: {model: Posts, as: 'post', attributes: ['autorId']}})
    const content = await JSON.parse(JSON.stringify(response));
    return content;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}

export const getUsersCount = async () => {
  try {
    const posts = await Users.count();
    const content = await JSON.parse(JSON.stringify(posts));
    return content;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}
