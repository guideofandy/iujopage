import styles from "./ServicesTemplete.module.css";
import ServicesController from "../../db/Controllers/ServiceController";
import PostsController from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";

const ServicesTemplete = ({data}) => {
  const {dataQuery, postsList} = data;
  const {renderPosts} = usePosts({initialPosts: postsList, unique: true});
  const {email, phone, name, coordinator, description} = dataQuery;
  return (
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div>
            <h2 className={styles.h2}>{name}</h2>
            <span>Cordinador: {coordinator}</span>
          </div>
          <p>Email: {email}</p>
          <p>Telefono: {phone}</p>
          <p>Descripcion: {description}</p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.posts}>{renderPosts()}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTemplete;

export async function getServerSideProps({query}) {
  const services = new ServicesController();
  const dataQuery = await services.getServiceByPath(query.servicePath);
  if (!!dataQuery) {
    const posts = new PostsController();
    const postsList = await posts.getPostFilters({filters: [dataQuery.name]});
    return {
      props: {data: {dataQuery, postsList}},
    };
  }
  return {notFound: true};
}
