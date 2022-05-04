import styles from "../../styles/Noticias.module.css";
import CareerController from "../../db/Controllers/CareerController";
import PostsController from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import FiltersContainer from "../../components/FiltersContainer";
import UserController from "../../db/Controllers/UserController";

const Noticias = ({data}) => {
  const {postsList, autors, careers} = data;
  const {addFilter, deleteFilter, renderPosts} = usePosts({
    initialPosts: postsList,
  });

  return (
    <div className="container">
      <div className={styles.content}>
        <FiltersContainer
          autors={autors}
          careers={careers}
          action={{addFilter, deleteFilter}}
        />
        <div className={styles.posts}>{renderPosts()}</div>
        <div className={styles.none}></div>
      </div>
    </div>
  );
};

export default Noticias;

export async function getServerSideProps() {
  const career = new CareerController();
  const users = new UserController();
  const posts = new PostsController();
  const careers = await career.getCareers();
  const autors = await users.getUsers();
  const postsList = await posts.getPosts();
  return {props: {data: {postsList, autors, careers}}};
}
