import Services from "../Models/Services";
import addMessage from "../../helpers/addMessage";
import parseFetch from "../../helpers/parseFetch";

class ServicesController {
    static async createService({data, filename}) {
        try {
            const service = await Services.create({...data, image: filename});
            return await parseFetch(service);
        } catch (error) {
            return addMessage(error.message, 403);
        }
    }
    static async getServices() {
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

    static async getServiceByPath(path) {
        try {
            const service = await Services.findOne({ where: { path } });
            const content = await JSON.parse(JSON.stringify(service));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    static async getDataServices() {
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

    static async getService(id) {
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
