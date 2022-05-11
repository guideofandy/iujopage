import axios from "axios";
import { useEffect, useState } from "react";
import PostContainer from "../components/PostContainer";
import Spinner from "../components/Spinner";
import styles from "../styles/Noticias.module.css";

const usePosts = (props) => {
  const { initialPosts, unique } = props;
  const [filtersTemp, setFiltersTemp] = useState([]);
  const [limit, setLimit] = useState(initialPosts.count || 0);
  const [posts, setPosts] = useState(initialPosts.rows || null);
  const [page, setPage] = useState(0);
  const [mode, setMode] = useState({ type: "normal", value: false });
  const [loader, setLoader] = useState(false);

  const getPost = (id) => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => setPosts(res.data))
      .catch();
  };

  const handleTag = (tag, page = 0, lastPage = 0) => {
    let newTags = "";
    if (typeof tag !== "string") {
      newTags = tag.join("-");
    } else {
      newTags = tag;
    }
    setLoader(true);
    axios
      .get(`/api/posts?tags=${newTags.toLowerCase()}&page=${page}`)
      .then((res) => {
        if (mode.type !== "tags" || mode.value !== newTags || page === lastPage) {
          setPosts(res.data.rows);
          setPage(0);
        } else {
          setPosts([...posts, ...res.data.rows]);
        }
        setLimit(res.data.count);
        setLoader(false);
        setMode({ type: "tags", value: newTags, lastPage: page });
      })
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

  const searchByTitle = (title, page = 0, lastPage = 0) => {
    if (title.length > 0) {
      setLoader(true);
      axios
        .get(`/api/posts?title=${title}&page=${page}`)
        .then((res) => {
          if (mode.type !== "title" || mode.value !== title || page === lastPage) {
            setPosts([...res.data.rows]);
            setPage(0);
          } else {
            setPosts([...posts, ...res.data.rows]);
          }
          setLoader(false);
          setLimit(res.data.count);
          setMode({ type: "title", value: title , lastPage: page});
        })
        .catch();
    }
  };

  const getPosts = (page) => {
    setLoader(true);
    axios
      .get(`/api/posts?page=${page}`)
      .then((response) => {
        if (mode.type !== "normal") {
          setPosts(response.data.rows);
          setPage(0);
        } else {
          setPosts([...posts, ...response.data.rows]);
        }
        setLoader(false);
        setLimit(response.data.count);
        setMode({ type: "normal", value: false });
      })
      .catch();
  };

  const getPostsByAutor = (autorId, page = 0, lastPage = 0) => {
    setLoader(true);
    axios
      .get(`/api/posts?autor=${autorId}&page=${page}`)
      .then((response) => {
        if (mode.type !== "autor" || mode.value !== autorId || page === lastPage) {
          setPosts([...response.data.rows]);
          setPage(0);
        } else {
          setPosts([...posts, ...response.data.rows]);
        }
        setLoader(false);
        setLimit(response.data.count);
        setMode({ type: "autor", value: autorId, lastPage: page });
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
    if (mode.type === "normal") {
      getPosts(page + 1);
    } else if (mode.type === "title") {
      searchByTitle(mode.value, page + 1, mode.lastPage);
    } else if (mode.type === "autor") {
      getPostsByAutor(mode.value, page + 1, mode.lastPage);
    } else if (mode.type === "tags") {
      handleTag(mode.value, page + 1, mode.lastPage);
    }
    setPage(page + 1);
  };

  const renderPosts = () => {
    return loader || posts.length > 0 ? (
      <>
        {posts.map((element, key) => (
          <PostContainer key={key} element={element} />
        ))}
        {loader && <Spinner />}
        {limit - page * 5 > 5 && (
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
    return loader || posts.length > 0 ? (
      <>
        {posts.map((element, key) => (
          <PostContainer
            key={key}
            update={() => getPostsByAutor(id)}
            element={element}
            role="admin"
          />
        ))}
        {loader && <Spinner />}
        {limit - page * 5 > 5 && (
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
    searchByTitle,
    handleTag,
  };
};

export default usePosts;
