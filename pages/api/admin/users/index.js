import UserController from "../../../../db/Controllers/UserController";

export default async function handler(req, res) {
		const users = new UserController();
	switch (req.method) {
		case 'GET':
			return res.status(200).json(await users.getAllUsers());
		case 'POST':
			return post(req, res);
		case 'PUT':
			return put(req, res);
		case 'DELETE':
			return del(req, res);
		default:
			return res.status(405).send(`Method ${req.method} not allowed`);
	}
}
