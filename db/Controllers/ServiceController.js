import Services from "../Models/Services";
import addMessage from "../../helpers/addMessage";

class ServicesController {
    async getServices() {
        try {
            const service = await Services.findAll({
                attributes: ["id", "name", "path", "image"],
            });
            const content = await JSON.parse(JSON.stringify(service));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async getServiceByPath(path) {
        try {
            const service = await Services.findOne({ where: { path } });
            const content = await JSON.parse(JSON.stringify(service));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async getDataServices() {
        try {
            const service = await Services.findAll({
                attributes: [
                    "id",
                    "name",
                    "path",
                    "description",
                    "coordinator",
                    "email",
                ],
            });
            const content = await JSON.parse(JSON.stringify(service));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async getService(id) {
        try {
            const service = await Services.findOne({ where: { id } });
            const content = await JSON.parse(JSON.stringify(service));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }
}
export default ServicesController;
