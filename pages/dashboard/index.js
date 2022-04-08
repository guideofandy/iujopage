import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import TextAreaPost from "../../components/TextAreaPost";
import { getPostsByAutor } from "../../db/Controllers/PostController";
import { useState } from 'react'
import axios from "axios";
import { verify } from "jsonwebtoken";
import usePosts from '../../hooks/usePosts';

const Dashboard = ({ data }) => {

  const {dataList, id} = data;
  const { posts , getPostsByAutor } = usePosts(dataList);

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.filters}>
        </div>
        <div className={styles.posts}>
          <TextAreaPost update={() => getPostsByAutor(id)} />
          {(!!posts && posts.length > 0) && posts.map((element, key) => <PostContainer key={key} update={() => getPostsByAutor(id)} role="admin" element={element} />)}
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
      const data = await getPostsByAutor(userAuthorization.id);
      return { props: { data : { dataList : data, id: userAuthorization.id} } }
    } catch (err) {
      console.log(err)
    }
  }

  return { props: { data: [] } };
}
