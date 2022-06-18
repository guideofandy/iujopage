import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
import Users from "../Models/Users";
import Tags from "../Models/Tags";
import { Op } from "sequelize";
import Logs from "../Models/Logs";
require("../relations");

class PostsController {
  static async getPosts(limit = 10, offset = 0) {
    try {
      const posts = await Posts.findAndCountAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        order: [["createdAt", "DESC"]],
        limit,
        offset,
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

  static async getPostByTitleAndTags(title, filters, limit = 5, offset = 0) {
    try {
      const posts = await Posts.findAndCountAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          {
            model: Tags,
            as: "tag",
            attributes: ["name"],
            where: { name: filters },
          },
        ],
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
        limit,
        offset,
        order: [["updatedAt", "DESC"]],
      });
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getPostByTitle(title, limit = 5, offset = 0) {
    try {
      const posts = await Posts.findAndCountAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
        limit,
        offset,
      });
      const content = await JSON.parse(JSON.stringify(posts));
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

  static async getPostsByAutor(id, limit = 5, offset = 0) {
    try {
      const posts = await Posts.findAndCountAll({
        include: [
          { model: Users, as: "autor", attributes: ["name"] },
          { model: Tags, as: "tag", attributes: ["name"] },
        ],
        order: [["createdAt", "DESC"]],
        where: { autorId: id },
        limit,
        offset,
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
      await Logs.create({
        userId: autorId,
        event: "CREATE",
        module: "POSTS",
      });
      return parse;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async UpdatePost(id, data) {
    const { title, image, content, autorId, type, tag } = data;
    let tags = tag;
    if (tag.length === 1) {
      tags = tag[0];
    }

    try {
      Tags.destroy({ where: { postId: id } });
      const post = await Posts.update(
        {
          title,
          content,
          autorId,
          type,
          image,
          updatedAt: new Date(),
          tag: tags,
        },
        {
          where: { id },
        }
      );
      if (tag.length === 1) {
        Tags.create({
          name: tags.name,
          postId: id,
        });
      }
      if (tag.length > 1) {
        for (let i = 0; i < tags.length; i++) {
          await Tags.create({
            postId: id,
            name: tags[i].name,
          });
        }
      }
      await Logs.create({
        userId: autorId,
        event: "UPDATE",
        module: "POSTS",
      });
      const parse = await JSON.parse(JSON.stringify(post));
      return parse;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async DeletePost(id, userId) {
    try {
      const post = await Posts.destroy({ where: { id: id } });
      await Logs.create({
        userId: userId,
        event: "DELETE",
        module: "POSTS",
      });
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

  static async getPostFilters(data, limit = 5, offset = 0) {
    const { filters } = data;
    try {
      const posts = await Posts.findAndCountAll({
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
        limit,
        offset,
      });
      const content = await JSON.parse(JSON.stringify(posts));
      const newContent = content.rows.sort((a, b) => {
        if (a.tag.length > b.tag.length) return -1;
        if (a.tag.length < b.tag.length) return 1;
        return 0;
      });
      return { rows: newContent, count: content.count };
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }

  static async getCountPostLastMonth(time = 1) {
    let timeToSearch = new Date(
      new Date().setMonth(new Date().getMonth() - time)
    );
    try {
      const posts = await Posts.count({
        where: {
          createdAt: {
            [Op.between]: [timeToSearch, new Date()],
          },
        },
      });
      const content = await JSON.parse(JSON.stringify(posts));
      return content;
    } catch (error) {
      return addMessage(error.message, 404);
    }
  }
}

export default PostsController;
