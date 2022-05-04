import CareerController from "../../../../db/Controllers/CareerController";
import Profiles from "../../../../db/Models/Profiles";

export default async function handler(req, res) {
	const { careerId } = req.query;
	const career = new CareerController();
	switch (req.method) {
		case "PATCH":
			const { Skills, Profiles, info, deleteSkillsList, deleteProfilesList } =
				req.body;
			if (Skills) await career.addSkill(careerId, Skills);
			if (Profiles) await career.addProfile(careerId, Profiles);
			if (deleteSkillsList) await career.deleteSkills(deleteSkillsList);
			if (deleteProfilesList) await career.deleteProfiles(deleteProfilesList);
			if (info) await career.UpdateCareer(careerId, info);
			const response = {};
			return res.status(200).json({
				message: "Successfully updated career",
				data: response,
			});
		default:
			return res
				.status(405)
				.json({ error: 405, message: "Method not allowed" });
	}
}
