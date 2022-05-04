import PostsController, { getPostsByAutor } from "../../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  const { autorId } = req.query;
  const posts = new PostsController();
  switch (req.method) {
    case "GET":
      const response = await posts.getPostsByAutor(autorId);
      return res.status(200).json(response);
    default:
      return res.status(200).json({})
  }
}
