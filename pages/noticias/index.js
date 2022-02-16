import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import PostContent from "../../components/Data/Post/PostContent";
import { useState } from "react";

const Noticias = () => {


  const [postList, setPostList] = useState();

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.filters}>
          Filters
        </div>
        <div className={styles.posts}>
          {PostContent().map((element, key) => <PostContainer key={key} element={element} />)}
        </div>
        <div className={styles.none}>

        </div>
      </div>
    </div>
  )
}

export default Noticias