import CareerController from "../../../db/Controllers/CareerController";

export default async function handler(req, res) {

  const careers = new CareerController();
  switch (req.method) {
    case "GET":
      return res.status(200).json(await careers.getCareer(req.query.careerId));
  }
}
