import UserController from "../../../db/Controllers/UserController";
import PostsController from "../../../db/Controllers/PostController";
import LogController from "../../../db/Controllers/LogController";

export default async function hanlder(req, res) {
  const { page, type } = req.query;
  const calcPage = (page) => {
    return page * 10 || 0;
  };
  switch (req.method) {
    case "GET":
      if (type === undefined) {
        const dataFetchGetUsers = await UserController.getUsersPostsReports();
        const dataFetchGetPostCount = await PostsController.getPostCount();
        const dataFetchGetUsersCount = await UserController.getUsersCount();
        const logs = await LogController.getLogs(calcPage(page));
        return res.status(200).json({
          dataFetchGetUsers,
          dataFetchGetPostCount,
          dataFetchGetUsersCount,
          logs,
        });
      } else {
        if (type === "bitacora") {
          const logs = await LogController.getAllLogs();
          return res.status(200).json({
            logs,
          });
        }
        return res.status(200).send("Not Found");
      }
  }
}
