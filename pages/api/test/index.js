import {getPostByAutor} from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      const response = await getPostByAutor(1);
      return res.status(200).json(response);
    default:
      return res.status(200).json([]);
  }
}
