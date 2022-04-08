import { getPostFilters } from "../../../../db/Controllers/PostController";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "POST":
      const response = await getPostFilters(req.body)
      return res.status(200).json(response);
    default:
      return res.status(200).json({})
  }
}

