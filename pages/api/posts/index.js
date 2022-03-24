import { CreatePost, getPosts } from "../../../db/Controllers/PostController"

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await getPosts());
    case "POST":
      const response = await CreatePost(req.body);
      if (response.error === undefined) {
        return res.status(200).json({ message: "Post created successfully" });
      } else {
        return res.status(response.error).json({ message: response.message });
      }

    default:
      return res.status(200).json(getPosts());
  }
}