import styles from "../../styles/Noticias.module.css";
import CareerController from "../../db/Controllers/CareerController";
import PostsController from "../../db/Controllers/PostController";
import usePosts from "../../hooks/usePosts";
import FiltersContainer from "../../components/FiltersContainer";
import UserController from "../../db/Controllers/UserController";
import SeachPanel from "../../components/SeachPanel";
import TagController from "../../db/Controllers/TagController";
import TagSearch from "../../components/TagSearch";

const Noticias = ({ data }) => {
  const { postsList, autors, careers, tags } = data;
  const {
    addFilter,
    deleteFilter,
    renderPosts,
    searchByTitle,
    getPostsByAutor,
    getPosts,
    handleTag,
    searchFilters: updateFilters,
  } = usePosts({
    initialPosts: postsList,
  });

  return (
    <div className="container">
      <div className={styles.content}>
        <FiltersContainer
          autors={autors}
          careers={careers}
          action={{ addFilter, deleteFilter, updateFilters }}
        />
        <div className={styles.filtersResponsive}>
          <SeachPanel
            search={searchByTitle}
            getPosts={getPosts}
            getPostsByAutor={getPostsByAutor}
            data={{ autors, careers }}
            handleTag={handleTag}
          />
          <TagSearch data={tags} handleTag={handleTag} />
        </div>
        <div className={styles.posts}>{renderPosts()}</div>
        <div className={styles.search}>
          <SeachPanel
            search={searchByTitle}
            getPosts={getPosts}
            getPostsByAutor={getPostsByAutor}
            data={{ autors, careers }}
            handleTag={handleTag}
          />
          <TagSearch data={tags} handleTag={handleTag} />
        </div>
      </div>
    </div>
  );
};

export default Noticias;

export async function getServerSideProps(req) {
  const careers = await CareerController.getCareers();
  const autors = await UserController.getUsers();
  const postsList = await PostsController.getPosts(5, 0);
  const tags = await TagController.getMostPopularTags();
  return { props: { data: { postsList, autors, careers, tags } } };
}
