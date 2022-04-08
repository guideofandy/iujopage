import { getPostsByAutor } from "../../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  const { autorId } = req.query;
  switch (req.method) {
    case "GET":
      const response = await getPostsByAutor(autorId);
      return res.status(200).json(response);
    default:
      return res.status(200).json({})
  }
}
