import Careers from "../Models/Careers";
import addMessage from "../../helpers/addMessage";
import Skills from "../Models/Skills";
import Profiles from "../Models/Profiles";
require("../relations");

export const getCareers = async () => {
    try {
        const careers = await Careers.findAll({
            attributes: ["id", "name", "icon", "color", "path"],
        });
        const content = await JSON.parse(JSON.stringify(careers));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};

export const getDataCareers = async () => {
    try {
        const careers = await Careers.findAll({
            include: [Skills, Profiles],
        });
        const content = await JSON.parse(JSON.stringify(careers));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};

export const getCareer = async (id) => {
    try {
        const career = await Careers.findOne({
            where: {id},
            include: [
                {model: Skills, attributes: ["name"]},
                {model: Profiles, attributes: ["name"]},
            ],
        });
        const content = await JSON.parse(JSON.stringify(career));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};

export const getCareerByPath = async (path) => {
    try {
        const career = await Careers.findOne({
            where: {path},
            include: [
                {model: Skills, attributes: ["name"]},
                {model: Profiles, attributes: ["name"]},
            ],
        });
        const content = await JSON.parse(JSON.stringify(career));
        return content;
    } catch (err) {
        return addMessage(err.message, 404);
    }
};
