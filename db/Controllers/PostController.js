import Post from "../Models/Posts"

export const getPosts = async () => {
  const posts = await Post.findAll({});
  const res = await JSON.stringify(posts)
  return JSON.parse(res);
}