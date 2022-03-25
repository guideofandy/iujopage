import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
import Users from "../Models/Users";
import Tags from "../Models/Tags";
require("../relations")

export const getPosts = async () => {
  try {
    const posts = await Posts.findAll({ include: [{ model: Users, as: 'autor', attributes: ["name"] }, { model: Tags, as: "tag", attributes: ["name"] }], order: [['createdAt', 'DESC']] });
    const content = await JSON.parse(JSON.stringify(posts));
    return content;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}
export const getTwoPosts = async () => {
  try {
    const posts = await Posts.findAll({ include: [{ model: Users, as: 'autor', attributes: ["name"] }, { model: Tags, as: "tag", attributes: ["name"] }], limit: 2, order: [['createdAt', 'DESC']] });
    const content = await JSON.parse(JSON.stringify(posts));
    return content;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}

export const getPostsMine = async (id) => {
  try {
    const posts = await Posts.findAll({ include: [{ model: Users, as: 'autor', attributes: ["name"] }, { model: Tags, as: "tag", attributes: ["name"] }], order: [['createdAt', 'DESC']], where: { autorId: id } });
    const content = await JSON.parse(JSON.stringify(posts));
    return content;
  } catch (error) {
    return addMessage(error.message, 404);
  }
}

export const CreatePost = async (data) => {
  const { title, content, autorId, type, tag } = data;
  let tags = tag;
  if (tag.length === 1) {
    tags = tag[0];
  }
  try {
    const post = await Posts.create({
      title,
      content,
      autorId,
      type,
      createdAt: new Date(),
      updatedAt: new Date(),
      tag: tags
    }, {
      include: [{
        model: Tags,
        as: 'tag'
      }]
    })
    const parse = await JSON.parse(JSON.stringify(post));
    return parse
  } catch (error) {
    return addMessage(error.message, 404);
  }
}

export const DeletePost = async (id) => {
  try {
    const post = await Posts.destroy({ where: { id: id } })
    const parse = await JSON.parse(JSON.stringify(post));
    return parse
  } catch (error) {
    return addMessage(error.message, 404);
  }
}