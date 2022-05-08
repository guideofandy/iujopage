import UserController from "../../../db/Controllers/UserController";
import PostsController from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      const dataFetchGetUsers = await UserController.getUsersPostsReports();
      const dataFetchGetPostCount = await PostsController.getPostCount();
      const dataFetchGetUsersCount = await UserController.getUsersCount();
      return res.status(200).json({ dataFetchGetUsers, dataFetchGetPostCount, dataFetchGetUsersCount });
  }
}
