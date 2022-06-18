import { verify } from "jsonwebtoken";
import PostsController from "../../../db/Controllers/PostController";
import nc from "next-connect";
import middlewareNc from "../../../helpers/middlewareNc";
import uploadFile from "../../../helpers/uploadFile";
require("dotenv");

export const config = {
  api: {
    bodyParser: false,
  },
};

const calcPage = (page) => {
  return page * 5 || 0;
};

const handler = nc(middlewareNc);

handler.use(uploadFile);

handler.get(async (req, res) => {
  if (req.query.title !== undefined && req.query.tags !== undefined) {
    const tags = req.query.tags.split("-");
    res
      .status(200)
      .json(
        await PostsController.getPostByTitleAndTags(
          req.query.title,
          tags,
          5,
          calcPage(req.query.page)
        )
      );
  }
  if (req.query.title !== undefined) {
    res
      .status(200)
      .json(
        await PostsController.getPostByTitle(
          req.query.title,
          5,
          calcPage(req.query.page)
        )
      );
  }
  if (req.query.autor !== undefined) {
    res
      .status(200)
      .json(
        await PostsController.getPostsByAutor(
          req.query.autor,
          5,
          calcPage(req.query.page)
        )
      );
  }
  if (req.query.tags !== undefined) {
    const tags = req.query.tags.split("-");
    res
      .status(200)
      .json(
        await PostsController.getPostFilters(
          { filters: tags },
          5,
          calcPage(req.query.page)
        )
      );
  }
  res
    .status(200)
    .json(await PostsController.getPosts(5, calcPage(req.query.page)));
});

handler.post(async (req, res) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.toLowerCase().startsWith("bareer")) {
    try {
      const userAuthorization = verify(
        authorization.slice(7),
        process.env.SECRET
      );
      const { id } = userAuthorization;
      let response;
      if (req.file != undefined) {
        const saveFilename = `/uploads/img/${req.file.filename}`;
        response = await PostsController.CreatePost({
          ...req.body,
          tag: JSON.parse(req.body.tag),
          autorId: id,
          image: saveFilename,
        });
      } else {
        response = await PostsController.CreatePost({
          ...req.body,
          tag: JSON.parse(req.body.tag),
          autorId: id,
        });
      }
      if (response.error === undefined) {
        res.status(200).json({ message: "Post created successfully" });
      } else {
        res.status(response.error).json({ message: response.message });
      }
    } catch (e) {
      res.status(401).json({ message: e.message });
    }
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
});

export default handler;
