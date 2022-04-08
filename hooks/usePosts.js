import axios from "axios";
import { useEffect, useState } from "react";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Noticias.module.css";

const usePosts = (props) => {

  const { initialPosts } = props;
  const [filtersTemp, setFiltersTemp] = useState([]);
  const [posts, setPosts] = useState(initialPosts || null);

  useEffect(() => {
    if (filtersTemp.length > 0) {
      searchFilters();
    } else {
      getPosts();
    }
  }, [filtersTemp]);

  const searchFilters = () => {
    axios.post('/api/posts/filters', { filters: filtersTemp }).then(response => setPosts(response.data)).catch();
  }

  const getPosts = () => {
    axios.get('/api/posts/').then(response => setPosts(response.data)).catch();
  }
  
  const getPostsByAutor = (autorId) => {
    axios.get(`/api/posts/filters/${autorId}`)
      .then((response) => {
        setPosts(response.data)
      }).catch();
  }

  const clearPosts = () => {
    setPosts([]);
  }

  const addFilter = (data) => {
    setFiltersTemp([...filtersTemp, data]);
  }

  const deleteFilter = (data) => {
    if (filtersTemp.find(element => element === data) !== undefined) {
      let NewFilters = filtersTemp;
      NewFilters.splice(NewFilters.findIndex(element => element === data), 1);
      setFiltersTemp([...NewFilters]);
    }
  }

  const renderPosts = () => {
   return ((!!posts && posts.length > 0) ? posts.map((element, key) => <PostContainer key={key} element={element} />) : <div className={styles.noPosts}>No hay noticias disponibles</div>
   );
  };

  return ({ posts, renderPosts ,filtersTemp, getPostsByAutor , getPosts, searchFilters, clearPosts, addFilter, deleteFilter });
}

export default usePosts;
