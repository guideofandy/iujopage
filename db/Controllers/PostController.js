import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
import Users from "../Models/Users";
import Tags from "../Models/Tags";
require("../relations");

class PostsController {
  static async getPosts() {
    try {
      const posts = await Posts.findAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        order: [["createdAt", "DESC"]],
      });
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getPost(id) {
    try {
      const post = await Posts.findOne({
        where: { id },
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
      });
      const content = await JSON.parse(JSON.stringify(post));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getTwoPosts() {
    try {
      const posts = await Posts.findAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        limit: 2,
        order: [["createdAt", "DESC"]],
      });
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
  
  static async getPostsByAutor(id) {
    try {
      const posts = await Posts.findAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        order: [["createdAt", "DESC"]],
        where: { autorId: id },
      });
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
  
  static async CreatePost(data) {
    const { title, image, content, autorId, type, tag } = data;
    let tags = tag;
    if (tag.length === 1) {
      tags = tag[0];
    }
    try {
      const post = await Posts.create(
        {
          title,
          content,
          autorId,
          type,
          image,
          createdAt: new Date(),
          updatedAt: new Date(),
          tag: tags,
        },
        {
          include: [
            {
              model: Tags,
              as: "tag",
            },
          ],
        }
      );
      const parse = await JSON.parse(JSON.stringify(post));
      return parse;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async DeletePost(id) {
    try {
      const post = await Posts.destroy({ where: { id: id } });
      const parse = await JSON.parse(JSON.stringify(post));
      return parse;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getPostCount() {
    try {
      const posts = await Posts.count();
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getPostFilters(data) {
    const { filters } = data;
    try {
      const posts = await Posts.findAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          {
            model: Tags,
            as: "tag",
            attributes: ["name"],
            where: { name: filters },
          },
        ],
        order: [["createdAt", "DESC"]],
      });
      const content = await JSON.parse(JSON.stringify(posts));
      const newContent = content.sort((a, b) => {
        if (a.tag.length > b.tag.length) return -1;
        if (a.tag.length < b.tag.length) return 1;
        return 0;
      });
      return newContent;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
}

export default PostsController;
