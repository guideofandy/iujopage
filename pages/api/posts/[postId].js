import { getPosts, DeletePost } from "../../../db/Controllers/PostController"

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json("Data");
    case "DELETE":
      const response = await DeletePost(req.query.postId);
      if (response.error === undefined) {
        return res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        return res.status(response.error).json({ message: response.message });
      }
    default:
      return res.status(200).json(getPosts());
  }
}