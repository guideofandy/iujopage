import CareerController from "../../../db/Controllers/CareerController";

export default async function handler(req, res) {
  const careers = new CareerController();
  switch (req.method) {
    case "GET":
      return res.status(200).json(await careers.getCareers());
    case "POST":
      const response = await careers.CreateCareer(req.body);
      if (response.error === undefined) {
        return res.status(200).json(response);
      } else {
        return res.status(400).json(response);
      }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
