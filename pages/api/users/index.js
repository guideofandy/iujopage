import UserController from "../../../db/Controllers/UserController";
import {verify} from "jsonwebtoken";
require("dotenv").config();

export default async function hanlder(req, res) {
  const {authorization} = req.headers;
  switch (req.method) {
    case "GET":
      const dataFetchGetUsers = await UserController.getUsers();
      if (dataFetchGetUsers.error === undefined) {
        return res.status(200).json(dataFetchGetUsers);
      } else {
        return res
          .status(dataFetchGetUsers.error)
          .json({message: dataFetchGetUsers.message});
      }
    case "POST":
      if (authorization && authorization.toLowerCase().startsWith("bareer")) {
        try {
          const userAuthorization = verify(
            authorization.slice(7),
            process.env.SECRET
          );
          const {role} = userAuthorization;
          if (role) {
            const dataFetchCreateUser = await UserController.CreateUser(req.body);
            if (dataFetchCreateUser.error === undefined) {
              return res
                .status(200)
                .json({message: "User created successfully"});
            } else {
              return res
                .status(dataFetchCreateUser.error)
                .json({message: dataFetchCreateUser.message});
            }
          }
        } catch (error) {
          return res.status(500).json({message: error.message});
        }
      }
    default:
      return res.status(200).json([]);
  }
}
