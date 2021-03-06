import Users from "../Models/Users";
import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import parseFetch from "../../helpers/parseFetch";
require("../relations");
require("dotenv").config();

class UserController {
  static async getUsers() {
    try {
      const users = await Users.findAll({
        attributes: ["id", "name", "email", "username", "status"],
        where: {
          status: 1,
        },
      });
      const content = await JSON.parse(JSON.stringify(users));
      return content;
    } catch (e) {
      return addMessage(e.message, 404);
    }
  }

  static async getAllUsers() {
    try {
      const users = await Users.findAll({
        attributes: ["id", "name", "email", "username", "status"],
      });
      const content = await JSON.parse(JSON.stringify(users));
      return content;
    } catch (e) {
      return addMessage(e.message, 404);
    }
  }
  static async CreateUser(data) {
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
      };
      const User = await Users.create(newData);
      const parse = await parseFetch(User);
      return parse;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async Login(data) {
    try {
      const { username, password } = data;
      const User = await Users.findOne({ where: { username: username } });
      if (!!User) {
        const parse = await parseFetch(User);
        const verify = await bcryptjs.compare(password, parse.password);
        if (verify) {
          const userForToken = {
            id: parse.id,
            username: parse.username,
            role: parse.role,
            email: parse.email,
          };
          const token = jwt.sign(userForToken, process.env.SECRET);
          return { name: parse.name, token };
        } else {
          return addMessage("Usuario o Contrase??a incorrecta.", 404);
        }
      } else {
        return addMessage("Usuario o Contrase??a incorrecta.", 404);
      }
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
  static async getUsersPostsReports() {
    try {
      const response = await Users.findAll({
        attributes: ["id", "name", "email"],
        include: { model: Posts, as: "post", attributes: ["autorId"] },
      });
      const content = await JSON.parse(JSON.stringify(response));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getUsersCount() {
    try {
      const posts = await Users.count();
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async updateName(data) {
    try {
      const { id, name } = data;
      const User = await Users.update({ name }, { where: { id: id } });
      const content = await JSON.parse(JSON.stringify(User));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async updateEmail(data) {
    try {
      const { id, email } = data;
      const User = await Users.update({ email }, { where: { id: id } });
      const content = await JSON.parse(JSON.stringify(User));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async updatePassword(data) {
    try {
      const { id, password } = data;
      const passwordHash = await bcryptjs.hash(password.trim(), 8);
      const User = await Users.update(
        { password: passwordHash },
        { where: { id: id } }
      );
      const content = await JSON.parse(JSON.stringify(User));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
  static async updateUser(data) {
    const { userId, email, name, password, status } = data;
    let newData = {};
    try {
      const response = await Users.findOne({ where: { id: userId } });
      const responseParsed = await parseFetch(response);
      newData = responseParsed;
      if (email) newData = { ...newData, email: email.trim() };
      if (name) newData = { ...newData, name: name.trim() };
      if (password) {
        const passwordHash = await bcryptjs.hash(password.trim(), 8);
        newData = { ...newData, password: passwordHash };
      }
      if (responseParsed.status !== status)
        newData = { ...newData, status: status };
      newData = { ...newData, updatedAt: new Date() };
      const User = await Users.update(newData, { where: { id: userId } });
      const content = await parseFetch(User);
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
}

export default UserController;
