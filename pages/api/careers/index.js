import CareerController from "../../../db/Controllers/CareerController";
import Logs from "../../../db/Models/Logs";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await CareerController.getCareers());
    case "POST":
      const authorization = req.headers.authorization;
      if (authorization && authorization.toLowerCase().startsWith("bareer")) {
        try {
          const userAuthorization = await verify(
            authorization.slice(7),
            process.env.SECRET
          );
          const { id } = userAuthorization;
          const response = await CareerController.CreateCareer(req.body);
          if (response.error === undefined) {
            await Logs.create({
              userId: id,
              event: "CREATE",
              module: "CAREERS",
            });
            return res.status(200).json(response);
          } else {
            return res.status(400).json(response);
          }
        } catch (error) {
          return res.status(401).json({ error: "Token inválido" });
        }
      }
      return res.status(401).json({ error: "Token inválido" });
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
