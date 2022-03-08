import ServicesTemplete from "../../../components/ServicesTemplete"
import { getPosts } from "../../../db/Controllers/PostController"

const UPP = ({ data }) => {
  return (
    <ServicesTemplete list={data} />
  )
}

export default UPP

export async function getStaticProps() {
  const data = await getPosts();
  return { props: data }
}