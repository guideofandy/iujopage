import PostsController from "../../../../db/Controllers/PostController";

const handler = async (req, res) => {
	const { month } = req.query;
	return res
		.status(200)
		.json({ count: await PostsController.getCountPostLastMonth(month) });
};

export default handler;
