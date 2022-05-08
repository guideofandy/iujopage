import CareerController from "../../../../db/Controllers/CareerController";

export default async function handler(req, res) {
	const { careerId } = req.query;
	switch (req.method) {
		case "PATCH":
			const { Skills, Profiles, info, deleteSkillsList, deleteProfilesList } =
				req.body;
			if (Skills) await CareerController.addSkill(careerId, Skills);
			if (Profiles) await CareerController.addProfile(careerId, Profiles);
			if (deleteSkillsList) await CareerController.deleteSkills(deleteSkillsList);
			if (deleteProfilesList) await CareerController.deleteProfiles(deleteProfilesList);
			if (info) await CareerController.UpdateCareer(careerId, info);
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
