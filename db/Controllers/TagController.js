import addMessage from "../../helpers/addMessage";
import parseFetch from "../../helpers/parseFetch";
import Tags from "../Models/Tags";
import sequelize from "sequelize";
require("../relations");

class TagController {
    static async getMostPopularTags() {
        try {
            const tags = await Tags.findAll({
                attributes: [
                    [sequelize.fn("COUNT", sequelize.col("name")), "countTags"],
                    "name",
                ],
                group: "name",
                order: [[sequelize.fn("COUNT", sequelize.col("name")), "DESC"]],
                limit: 5,
            });
            const content = parseFetch(tags);
            return content;
        } catch (err) {
            return addMessage(err, 404);
        }
    }
}

export default TagController;
