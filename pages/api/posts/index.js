import { CreatePost, getPosts, DeletePost } from "../../../db/Controllers/PostController"

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await getPosts());
    case "POST":
      CreatePost(req.body);
      return res.status(200).json("CREADO");
    default:
      return res.status(200).json(getPosts());
  }
}