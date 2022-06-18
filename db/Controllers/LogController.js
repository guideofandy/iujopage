import Logs from "../Models/Logs";
import Users from "../Models/Users";
require("../relations");

class LogController {
    static async getLogs(offset = 0) {
        try {
            const logs = await Logs.findAndCountAll({
                include: {
                    as: "user",
                    model: Users,
                    attributes: ["name"],
                },
                order: [["createdAt", "DESC"]],
                limit: 10,
                offset,
            });
            return logs;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllLogs() {
        try {
            const logs = await Logs.findAll({
                include: {
                    as: "user",
                    model: Users,
                    attributes: ["name"],
                },
                order: [["createdAt", "DESC"]],
            });
            return logs;
        } catch (error) {
            console.log(error);
        }
    }
}

export default LogController;
