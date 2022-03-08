import Users from "../Models/Users";
import addMessage from "../../helpers/addMessage";
const bcryptjs = require("bcryptjs");

export const CreateUser = async (data) => {

  try {
    const { name, password, email } = data;
    const passwordHash = await bcryptjs.hash(password.trim(), 8);
    const newData = {
      name: name.trim(),
      password: passwordHash,
      email: email.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const User = await Users.create(newData);
    const res = JSON.stringify(User);
    const parse = await JSON.parse(res);
    return addMessage(parse, "Usuario creado con exito.")
  } catch (error) {
    return addMessage(null, error.message);
  }
}

export const verifyUser = async () => {
  try {
    const User = await Users.create(newData);
    const res = JSON.stringify(User);
    const parse = await JSON.parse(res);
    return addMessage(parse)
  } catch (error) {
    return addMessage(null, error.message);
  }
}