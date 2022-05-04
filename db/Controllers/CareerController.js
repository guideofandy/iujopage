import Careers from "../Models/Careers";
import addMessage from "../../helpers/addMessage";
import Skills from "../Models/Skills";
import Profiles from "../Models/Profiles";
import parseFetch from "../../helpers/parseFetch";
require("../relations");

class CareerController {
    async getCareers() {
        try {
            const careers = await Careers.findAll({
                attributes: ["id", "name", "icon", "color", "path"],
            });
            const content = await JSON.parse(JSON.stringify(careers));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async CreateCareer(data) {
        try {
            await Careers.create(data, { include: [Skills, Profiles] });
            const content = `${data.name} has been added to the careers`;
            return content;
        } catch (error) {
            return addMessage(error.message, "error");
        }
    }
    async UpdateCareer(id, data) {
        try {
            await Careers.update(data, { where: { id } });
            const content = `has been updated`;
            return content;
        } catch (error) {
            return addMessage(error.message, 400);
        }
    }
    async getCareers() {
        try {
            const careers = await Careers.findAll({
                attributes: ["id", "name", "icon", "color", "path"],
            });
            const content = await JSON.parse(JSON.stringify(careers));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }
    async getDataCareers() {
        try {
            const careers = await Careers.findAll({
                include: [Skills, Profiles],
            });
            const content = await JSON.parse(JSON.stringify(careers));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async getCareer(id) {
        try {
            const career = await Careers.findOne({
                where: { id },
                include: [
                    { model: Skills, attributes: ["name"] },
                    { model: Profiles, attributes: ["name"] },
                ],
            });
            const content = await JSON.parse(JSON.stringify(career));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async getCareerByPath(path) {
        try {
            const career = await Careers.findOne({
                where: { path },
                include: [
                    { model: Skills, attributes: ["name"] },
                    { model: Profiles, attributes: ["name"] },
                ],
            });
            const content = await JSON.parse(JSON.stringify(career));
            return content;
        } catch (err) {
            return addMessage(err.message, 404);
        }
    }

    async addSkill(careerId, data) {
        console.log(data)
        if (data.length === 1) {
            try {
                await Skills.create({
                    name: data[0].name,
                    careerId: parseInt(careerId),
                });
                const content = `added to the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        } else {
            try {
                const newSkills = await data.map((skill) => {
                    return {
                        name: skill.name,
                        careerId: parseInt(careerId),
                    };
                });
                for(let i = 0; i < newSkills.length; i++) {
                    await Skills.create(newSkills[i]);
                }
                const content = `added to the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        }
    }

    async addProfile(careerId, data) {
        if (data.length === 1) {
            try {
                await Profiles.create({
                    name: data[0].name,
                    careerId: parseInt(careerId),
                });
                const content = `added to the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        } else {
            try {
                const newProfiles = await data.map((profile) => {
                    return {
                        name: profile.name,
                        careerId: parseInt(careerId),
                    };
                });
                for(let i = 0; i < newProfiles.length; i++) {
                    await Profiles.create(newProfiles[i]);
                }
                const content = `added to the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        }
    }

    async deleteSkills(list) {
        if(list.length === 1) {
            try {
                await Skills.destroy({
                    where: {
                        id: list[0].id,
                    },
                });
                const content = `deleted from the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        } else {
            try {
                for(let i = 0; i < list.length; i++) {
                    await Skills.destroy({
                        where: {
                            id: list[i].id,
                        },
                    });
                }
                const content = `deleted from the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        }
    }

    async deleteProfiles(list) {
        console.log("HOLA")
        if(list.length === 1) {
            try {
                await Profiles.destroy({
                    where: {
                        id: list[0].id,
                    },
                });
                const content = `deleted from the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        } else {
            try {
                for(let i = 0; i < list.length; i++) {
                    await Profiles.destroy({
                        where: {
                            id: list[i].id,
                        },
                    });
                }
                const content = `deleted from the career`;
                return content;
            } catch (error) {
                return addMessage(error.message, 400);
            }
        }
    }
}

export default CareerController;
