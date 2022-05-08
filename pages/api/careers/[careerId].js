import CareerController from "../../../db/Controllers/CareerController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await CareerController.getCareer(req.query.careerId));
  }
}
