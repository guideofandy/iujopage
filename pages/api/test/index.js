import {getDataCareers} from "../../../db/Controllers/CareerController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).send(await getDataCareers());
    default:
      return res.status(200).json(req.body);
  }
}
