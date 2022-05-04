import PostsController from "../../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  const posts = new PostsController();
  switch (req.method) {
    case "POST":
      const response = await posts.getPostFilters(req.body)
      return res.status(200).json(response);
    default:
      return res.status(200).json({})
  }
}

