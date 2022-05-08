import PostsController from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  const {postId} = req.query;
  switch (req.method) {
    case "GET":
      if (postId !== "") {
        const post = await PostsController.getPost(postId);
        return res.status(200).json(post);
      }
      return res.status(200).json("Data");
    case "DELETE":
      const response = await PostsController.DeletePost(req.query.postId);
      if (response.error === undefined) {
        return res.status(200).json({message: "Post deleted successfully"});
      } else {
        return res.status(response.error).json({message: response.message});
      }
    default:
      return res.status(200).json([]);
  }
}
