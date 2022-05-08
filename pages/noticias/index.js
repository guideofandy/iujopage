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
  const careers = await CareerController.getCareers();
  const autors = await UserController.getUsers();
  const postsList = await PostsController.getPosts();
  return {props: {data: {postsList, autors, careers}}};
}
