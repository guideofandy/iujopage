import styles from "../../styles/Noticias.module.css";
import {getPosts} from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import FiltersContainer from "../../components/FiltersContainer";
import {getUsers} from "../../db/Controllers/UserController";
import {getCareers} from "../../db/Controllers/CareerController";

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
  const careers = await getCareers();
  const autors = await getUsers();
  const postsList = await getPosts();
  return {props: {data: {postsList, autors, careers}}};
}
