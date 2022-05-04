import CareerController from "../../../../db/Controllers/CareerController";

export default async function handler (req,res) {
	const career = new CareerController();
	switch(req.method){
		case "GET":
			return res.status(200).json(await career.getDataCareers());
		default: 
			return res.status(405).json({message: "Method not allowed"});
	}
}
