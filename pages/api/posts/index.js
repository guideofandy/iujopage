import { verify } from "jsonwebtoken";
import PostsController from "../../../db/Controllers/PostController";
require("dotenv");

export default async function hanlder(req, res) {
  const authorization = req.headers.authorization;
  console.log(req.query);
  const calcPage = () => {
    return req.query.page * 5 || 0;
  };
  switch (req.method) {
    case "GET":
      if(req.query.title !== undefined && req.query.tags !== undefined){
        console.log("EN TITULO Y AUTOR")
        const tags = req.query.tags.split("-");
        return res
          .status(200)
          .json(await PostsController.getPostByTitleAndTags(req.query.title, tags, 5 ,calcPage()));
      }
      if (req.query.title !== undefined) {
        console.log("EN TITLE");
        return res
          .status(200)
          .json(
            await PostsController.getPostByTitle(req.query.title, 5, calcPage())
          );
      }
      if (req.query.autor !== undefined) {
        console.log("EN AUTOR");
        return res
          .status(200)
          .json(
            await PostsController.getPostsByAutor(
              req.query.autor,
              5,
              calcPage()
            )
          );
      }
      if (req.query.tags !== undefined) {
        const tags = req.query.tags.split("-");
        return res.status(200).json(await PostsController.getPostFilters({filters: tags}, 5, calcPage()));
      }
      console.log("EN GET");
      return res
        .status(200)
        .json(await PostsController.getPosts(5, calcPage()));
    case "POST":
      if (authorization && authorization.toLowerCase().startsWith("bareer")) {
        try {
          const userAuthorization = verify(
            authorization.slice(7),
            process.env.SECRET
          );
          const { id } = userAuthorization;
          const data = { ...req.body, autorId: id };
          const response = await PostsController.CreatePost(data);
          if (response.error === undefined) {
            return res
              .status(200)
              .json({ message: "Post created successfully" });
          } else {
            return res
              .status(response.error)
              .json({ message: response.message });
          }
        } catch (e) {
          response.status(401).json({ message: e.message });
        }
      }
      return res.status(400).json({ message: "Not found" });

    default:
      return res.status(200).json(await posts.getPosts());
  }
}
