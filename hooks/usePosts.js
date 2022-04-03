import axios from "axios";
import { useEffect, useState } from "react";

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

  return ({ posts, filtersTemp, getPosts, searchFilters, clearPosts, addFilter, deleteFilter });
}

export default usePosts;