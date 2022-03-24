import { CreateUser } from "../../../db/Controllers/UserController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json([]);
    case "POST":
      const response = await CreateUser(req.body);
      if (response.error === undefined) {
        return res.status(200).json({ message: "User created successfully" });
      } else {
        return res.status(response.error).json({ message: response.message });
      }
    default:
      return res.status(200).json([]);
  }
}


