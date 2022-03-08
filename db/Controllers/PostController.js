import Posts from "../Models/Posts";
import addMessage from "../../helpers/addMessage";
import Users from "../Models/Users";
require("../relations")

export const getPosts = async () => {
  try {
    const posts = await Posts.findAll({ include: { model: Users, as: 'autor', attributes: ["name"] }, });
    const res = JSON.stringify(posts);
    const content = await JSON.parse(res);
    return addMessage(content);
  } catch (error) {
    return addMessage(null, error.message);
  }
}
export const getTwoPosts = async () => {
try {
    const posts = await Posts.findAll({ include: { model: Users, as: 'autor', attributes: ["name"] } });
    const res = JSON.stringify(posts);
    const content = await JSON.parse(res);
    return addMessage(content);
  } catch (error) {
    return addMessage(null, error.message);
  }
}

export const CreatePost = async (data) => {
  const { title, content, autorId, type } = data;
  try {
    const post = await Posts.create({
      title,
      content,
      autorId,
      type,
      created_at: new Date(),
      updated_at: new Date(),
    })
    const res = JSON.stringify(post);
    const parse = await JSON.parse(res);
    return addMessage(parse)
  } catch (error) {
    return addMessage(null, error.message);
  }
}

export const DeletePost = async (id) => {
  try {
    const post = await Posts.destroy({ where: { id: id } })
    const res = JSON.stringify(post);
    const parse = await JSON.parse(res);
    return addMessage(parse)
  } catch (error) {
    return addMessage(null, error.message);
  }
}