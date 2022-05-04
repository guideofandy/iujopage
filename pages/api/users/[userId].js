import UserController from "../../../db/Controllers/UserController";

export default async function handler(req, res) {
  const user = new UserController();
  const {name, email, password, status} = req.body;
  const {userId} = req.query;

  switch (req.method) {
    case "PUT":
      const response = await user.updateUser({userId, name, email, password, status});
      return res.status(200).json(response);
    case "PATCH":
      try {
        if (name) {
          return res.status(200).json(await user.updateName({name, id: userId}));
        } else if (email) {
          return res.status(200).json(await user.updateEmail({email, id: userId}));
        } else if (password) {
          return res.status(200).json(await user.updatePassword({password, id: userId}));
        } else {
          return res.status(400).json({
            message: "Please provide a name, email or password to update"
          });
        }
      } catch (e) {
        return res.status(403).json({
          error: e.message,
        });
      }
    default: {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }
  }
}
