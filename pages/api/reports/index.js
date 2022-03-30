import { getUsersPostsReports, getUsersCount } from "../../../db/Controllers/UserController";
import { getPostCount } from "../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      const dataFetchGetUsers = await getUsersPostsReports();
      const dataFetchGetPostCount = await getPostCount();
      const dataFetchGetUsersCount = await getUsersCount();
      return res.status(200).json({ dataFetchGetUsers, dataFetchGetPostCount, dataFetchGetUsersCount });
  }
}