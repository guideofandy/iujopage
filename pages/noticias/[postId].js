import styles from "../../styles/Noticias.module.css";
import {getPost} from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";

const Noticias = ({data}) => {
  const {renderPosts} = usePosts({
    initialPosts: data,
    unique: true,
  });

  return (
    <div className="container">
      <div className={styles.content}>
        <div></div>
        <div className={styles.posts}>{renderPosts()}</div>
        <div className={styles.none}></div>
      </div>
    </div>
  );
};

export default Noticias;

export async function getServerSideProps({query}) {
  const {postId} = query;
  const parsedPostId = parseInt(postId);
  if (Number.isInteger(parsedPostId)) {
    const data = await getPost(postId);
    return {
      props: {data: [data]},
    };
  }
  return {props: {data: []}};
}
