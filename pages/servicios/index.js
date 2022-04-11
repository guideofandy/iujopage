import Services from "../../components/Index/Services"
import {getServices} from "../../db/Controllers/ServiceController"

const Servicios = ({data}) => {
  console.log(data)
  return (
    <Services />
  )
}

export default Servicios

export async function getServerSideProps() {
  const data = await getServices();
  return {props: {data}}
}
