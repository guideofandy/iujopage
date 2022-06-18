import PostsController from "../../../db/Controllers/PostController";
import { verify } from "jsonwebtoken";
import nc from "next-connect";
import middlewareNc from "../../../helpers/middlewareNc";
import uploadFile from "../../../helpers/uploadFile";
require("dotenv");

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(middlewareNc);

handler.use(uploadFile);

handler.get(async (req, res) => {
  const { postId } = req.query;
  if (postId !== "") {
    const post = await PostsController.getPost(postId);
    res.status(200).json(post);
  } else {
    res.status(404).json("Not found");
  }
});

handler.put(async (req, res) => {
  const authorization = req.headers.authorization;
  const { postId } = req.query;
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
        response = await PostsController.UpdatePost(postId, {
          ...req.body,
          tag: JSON.parse(req.body.tag),
          autorId: id,
          image: saveFilename,
        });
      } else {
        response = await PostsController.UpdatePost(postId, {
          ...req.body,
          tag: JSON.parse(req.body.tag),
          autorId: id,
          image: "",
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

handler.delete(async (req, res) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.toLowerCase().startsWith("bareer")) {
    try {
      const userAuthorization = verify(
        authorization.slice(7),
        process.env.SECRET
      );
      const { id } = userAuthorization;
      const response = await PostsController.DeletePost(req.query.postId, id);
      if (response.error === undefined) {
        return res.status(200).json({ message: "Post deleted successfully" });
      } else {
        return res.status(response.error).json({ message: response.message });
      }
    } catch (error) {
      return res.status(401).json({ error: "Token inválido" });
    }
  }
});

export default handler;
