import nc from "next-connect";
import middlewareNc from "../../../helpers/middlewareNc"
import uploadFile from "../../../helpers/uploadFile";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(middlewareNc);


handler.use(uploadFile);

handler.post((req, res) => {
  res.status(200).json({ message: "success" });
});

export default handler;
