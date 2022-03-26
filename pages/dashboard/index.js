import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import TextAreaPost from "../../components/TextAreaPost";
import { getPostsMine } from "../../db/Controllers/PostController";
import { useState } from 'react'
import axios from "axios";
import { verify } from "jsonwebtoken";
import useAuth from '../../hooks/useAuth';

const Dashboard = ({ data }) => {

  const [postsList, setPostsList] = useState(data);
  const { user } = useAuth();

  const dataFetch = () => {
    const config = {
      headers: {
        authorization: `Bareer ${user.token}`
      }
    }
    axios.get('/api/posts/', config)
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

export async function getServerSideProps(request) {
  const { req } = request;
  const { sessionJWT } = req.cookies;
  if (sessionJWT !== undefined) {
    try {
      const userAuthorization = verify(sessionJWT, process.env.SECRET)
      const data = await getPostsMine(userAuthorization.id);
      return { props: { data } }
    } catch (err) {
      console.log(err)
    }
  }

  return { props: { data: [] } };
}