import ServicesTemplete from "../../../components/ServicesTemplete"
import { getPosts } from "../../../db/Controllers/PostController"

const UPP = ({ data }) => {
  return (
    <ServicesTemplete data={data} />
  )
}

export default UPP

export async function getServerSideProps() {
  const data = await getPosts();
  return { props: { data: data } };
}