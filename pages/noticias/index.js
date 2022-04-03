import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import { getPosts } from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import FiltersContainer from "../../components/FiltersContainer";

const Noticias = ({ data }) => {

  const { posts, addFilter, deleteFilter } = usePosts({ initialPosts: data });

  return (
    <div className="container">
      <div className={styles.content}>
        <FiltersContainer action={{ addFilter, deleteFilter }} />
        <div className={styles.posts}>
          {(!!posts && posts.length > 0) && posts.map((element, key) => <PostContainer key={key} element={element} />)}
        </div>
        <div className={styles.none}>
        </div>
      </div>
    </div>
  )
}

export default Noticias

export async function getServerSideProps() {
  const data = await getPosts();
  return { props: { data } };
}