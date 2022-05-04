import UserController from "../../../db/Controllers/UserController";

export default async function handler(req, res) {
  const user = new UserController();
  switch (req.method) {
    case "GET":
      return res.status(200).json([]);
    case "POST":
      const response = await user.Login(req.body);
      if (response.error === undefined) {
        return res.status(200).json(response);
      }
      return res.status(response.error).json({message: response.message});
    default:
      return res.status(200).json([]);
  }
}
