import UserController from "../../../db/Controllers/UserController";
import PostsController from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  const users = new UserController();
  const posts = new PostsController();

  switch (req.method) {
    case "GET":
      const dataFetchGetUsers = await posts.getUsersPostsReports();
      const dataFetchGetPostCount = await posts.getPostCount();
      const dataFetchGetUsersCount = await users.getUsersCount();
      return res.status(200).json({ dataFetchGetUsers, dataFetchGetPostCount, dataFetchGetUsersCount });
  }
}
