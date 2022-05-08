import CareerController from "../../../db/Controllers/CareerController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await CareerController.getCareers());
    case "POST":
      const response = await CareerController.CreateCareer(req.body);
      if (response.error === undefined) {
        return res.status(200).json(response);
      } else {
        return res.status(400).json(response);
      }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
