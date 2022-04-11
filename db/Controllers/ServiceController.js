import Services from "../Models/Services";
import addMessage from "../../helpers/addMessage";

export const getServices = async () => {
    try {
        const service = await Services.findAll({attributes: ["id", "name", "path", "image"]});
        const content = await JSON.parse(JSON.stringify(service));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};

export const getServieByPath = async (path) => {
    try {
        const service = await Services.findOne({where: {path}});
        const content = await JSON.parse(JSON.stringify(service));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};

export const getService = async (id) => {
    try {
        const service = await Services.findOne({where: {id}});
        const content = await JSON.parse(JSON.stringify(service));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};
