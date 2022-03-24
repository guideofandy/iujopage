import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import TextAreaPost from "../../components/TextAreaPost";
import { getPosts } from "../../db/Controllers/PostController";
import { useState } from 'react'
import axios from "axios";

const Dashboard = ({ data }) => {

  const [postsList, setPostsList] = useState(data);

  const dataFetch = () => {
    axios.get('/api/posts/')
      .then((response) => {
        setPostsList(response.data)
      })
  }

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.filters}>
        </div>
        <div className={styles.posts}>
          <TextAreaPost update={dataFetch} />
          {!!postsList && postsList.map((element, key) => <PostContainer key={key} update={dataFetch} role="admin" element={element} />)}
        </div>
        <div className={styles.none}>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

export async function getServerSideProps() {
  const data = await getPosts();
  return { props: { data } };
}