import { getPosts, DeletePost } from "../../../db/Controllers/PostController"

export default async function hanlder(req, res) {
  switch (req.method) {
    case "DELETE":
      DeletePost(req.query.postId);
      return res.status(200).json("Eliminado");
    default:
      return res.status(200).json(getPosts());
  }
}