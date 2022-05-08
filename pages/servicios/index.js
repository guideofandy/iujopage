import Services from "../../components/Index/Services"
import ServicesController from "../../db/Controllers/ServiceController"

const Servicios = ({data}) => {
  return (
    <Services data={data} />
  )
}

export default Servicios

export async function getServerSideProps() {
  const data = await ServicesController.getServices();
  return {props: {data}}
}
