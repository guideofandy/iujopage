import { CreateUser, getUsers } from "../../../db/Controllers/UserController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      const dataFetchGetUsers = await getUsers();
      if (dataFetchGetUsers.error === undefined) {
        return res.status(200).json(dataFetchGetUsers);
      } else {
        return res.status(dataFetchGetUsers.error).json({ message: dataFetchGetUsers.message });
      }
    case "POST":
      const dataFetchCreateUser = await CreateUser(req.body);
      if (dataFetchCreateUser.error === undefined) {
        return res.status(200).json({ message: "User created successfully" });
      } else {
        return res.status(dataFetchCreateUser.error).json({ message: dataFetchCreateUser.message });
      }
    default:
      return res.status(200).json([]);
  }
}


