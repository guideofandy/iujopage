import {getPostByAutor} from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).send(req.method);
    default:
      const {ss} = req.body
      return res.status(200).json(req.body);
  }
}
