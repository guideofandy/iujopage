import Services from "../../Models/Services";

const ServicesSeed = () => {
  Services.create({
    name: "UPP",
    path: "upp",
    description: "Description of UPP",
    image: "upp.png",
    phone: "1234567890",
    email: "email",
    coordinator: "Elon Musk",
  })
}

export default ServicesSeed;
