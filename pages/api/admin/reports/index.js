import LogController from "../../../../db/Controllers/LogController";

export default async function hanlder(req, res) {
	switch (req.method) {
		case "GET":
			const logs = await LogController.getAllLogs();
			return res.status(200).json({
				logs,
			});
	}
}
