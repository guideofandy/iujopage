import axios from "axios";
import { useEffect, useState } from "react";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Noticias.module.css";

const usePosts = (props) => {
  const { initialPosts, unique } = props;
  const [filtersTemp, setFiltersTemp] = useState([]);
  const [limit, setLimit] = useState(initialPosts.count || 0);
  const [posts, setPosts] = useState(initialPosts.rows || null);
  const [page, setPage] = useState(0);

  const getPost = (id) => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => setPosts(res.data))
      .catch();
  };

  const searchFilters = () => {
    if (filtersTemp.length > 0) {
      axios
        .post("/api/posts/filters", { filters: filtersTemp })
        .then((response) => setPosts(response.data))
        .catch();
    } else {
      setPosts(initialPosts.rows);
    }
  };

  const getPosts = (page) => {
    axios
      .get(`/api/posts?page=${page}`)
      .then((response) => {
        setPosts([...posts, ...response.data.rows]);
        setLimit(response.data.count);
      })
      .catch();
  };

  const getPostsByAutor = (autorId) => {
    axios
      .get(`/api/posts/filters/${autorId}`)
      .then((response) => {
        setPosts(response.data.rows);
        setLimit(response.data.count);
      })
      .catch();
  };

  const clearPosts = () => {
    setPosts([]);
  };

  const addFilter = (data) => {
    setFiltersTemp([...filtersTemp, data]);
  };

  const deleteFilter = (data) => {
    if (filtersTemp.find((element) => element === data) !== undefined) {
      let NewFilters = filtersTemp;
      NewFilters.splice(
        NewFilters.findIndex((element) => element === data),
        1
      );
      setFiltersTemp([...NewFilters]);
    }
  };

  const handlePagination = () => {
    setPage(page + 1);
    getPosts(page + 1);
  };

  const renderPosts = () => {
    return !!posts && posts.length > 0 ? (
      <>
        {posts.map((element, key) => (
          <PostContainer key={key} element={element} />
        ))}
        {limit - (page * 5) > 5 && (
          <div className={styles.infinity} onClick={handlePagination}>
            Cargar más
          </div>
        )}
      </>
    ) : (
      <div className={styles.noPosts}>No hay noticias disponibles</div>
    );
  };

  const renderByAutor = (id) => {
    return !!posts && posts.length > 0 ? (
      <>
        {posts.map((element, key) => (
          <PostContainer
            key={key}
            update={() => getPostsByAutor(id)}
            element={element}
            role="admin"
          />
        ))}
        {limit - (page * 5) > 5 && (
          <div className={styles.infinity} onClick={handlePagination}>
            Cargar más
          </div>
        )}
      </>
    ) : (
      <div className={styles.noPosts}>No hay noticias disponibles</div>
    );
  };

  return {
    posts,
    getPost,
    renderPosts,
    renderByAutor,
    filtersTemp,
    getPostsByAutor,
    getPosts,
    searchFilters,
    clearPosts,
    addFilter,
    deleteFilter,
  };
};

export default usePosts;
