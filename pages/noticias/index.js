import styles from "../../styles/Noticias.module.css";
import {getPosts} from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import FiltersContainer from "../../components/FiltersContainer";

const Noticias = ({data}) => {
  const {addFilter, deleteFilter, renderPosts} = usePosts({
    initialPosts: data
  });

  return (
    <div className="container">
      <div className={styles.content}>
        <FiltersContainer action={{addFilter, deleteFilter}} />
        <div className={styles.posts}>{renderPosts()}</div>
        <div className={styles.none}></div>
      </div>
    </div>
  );
};

export default Noticias;

export async function getServerSideProps() {
  const data = await getPosts();
  return {props: {data}};
}
