import nc from "next-connect";
import middlewareNc from "../../../../helpers/middlewareNc";
import uploadFile from "../../../../helpers/uploadFile";
import ServicesController from "../../../../db/Controllers/ServiceController";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(middlewareNc);

handler.use(uploadFile);

handler.post(async (req, res) => {
  const { filename } = req.file;
  const saveFilename = `/uploads/img/${filename}`;
  const response = await ServicesController.createService({
    data: req.body,
    filename: saveFilename,
  });
  res.status(200).json(response);
});

export default handler;
