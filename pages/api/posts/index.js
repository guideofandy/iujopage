import { verify } from "jsonwebtoken";
import { CreatePost, getPosts, getPostsMine } from "../../../db/Controllers/PostController"
require('dotenv')

export default async function hanlder(req, res) {
  const authorization = req.headers.authorization;
  switch (req.method) {
    case "GET":
      if (authorization && authorization.toLowerCase().startsWith("bareer")) {
        try {
          const userAuthorization = verify(authorization.slice(7), process.env.SECRET);
          const { id } = userAuthorization;
          const response = await getPostsMine(id);
          if (response.error === undefined) {
            return res.status(200).json(response);
          } else {
            return res.status(response.error).json({ message: response.message });
          }
        } catch (e) {
          response.status(401).json({ message: e.message });
        }
      }
      return res.status(200).json(await getPosts());
    case "POST":
      if (authorization && authorization.toLowerCase().startsWith("bareer")) {
        try {
          const userAuthorization = verify(authorization.slice(7), process.env.SECRET);
          const { id } = userAuthorization;
          const data = { ...req.body, autorId: id }
          const response = await CreatePost(data);
          if (response.error === undefined) {
            return res.status(200).json({ message: "Post created successfully" });
          } else {
            return res.status(response.error).json({ message: response.message });
          }
        } catch (e) {
          response.status(401).json({ message: e.message });
        }
      }
      return res.status(200).json({ message: "Hola" })

    default:
      return res.status(200).json(getPosts());
  }
}