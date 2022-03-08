import { CreateUser } from "../../../db/Controllers/UserController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json([]);
    case "POST":
      const response = await CreateUser(req.body);
      return res.status(200).json(response.message);
    default:
      return res.status(200).json([]);
  }
}


