import styles from "../../styles/Noticias.module.css";
import PostsController from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import PostContainer from "../../components/PostContainer";

const Noticias = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div></div>
        <div className={styles.posts}>
          <PostContainer element={data[0]} />
        </div>
        <div className={styles.none}></div>
      </div>
    </div>
  );
};

export default Noticias;

export async function getServerSideProps({ query }) {
  const { postId } = query;
  const parsedPostId = parseInt(postId);
  if (Number.isInteger(parsedPostId)) {
    const data = await PostsController.getPost(postId);
    if (data) {
      return {
        props: {
          data: [data],
        },
      };
    }
  }
  return { notFound: true };
}
