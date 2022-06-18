import styles from "./admin.module.css";
import useAuth from "../../hooks/useAuth";
import useOptionsList from "../../hooks/useOptionsList";
import QueryReports from "../../components/QueryReports";
import { useState, useEffect } from "react";
import { verify } from "jsonwebtoken";

import axios from "axios";

const Admin = ({ data }) => {
  const { user } = useAuth();
  const { role, id } = data;
  const [dataPosts, setDataPosts] = useState("");
  const [time, setTime] = useState("1");

  const { optionsList, optionListEditor, mapList } = useOptionsList({
    name: "",
  });
  useEffect(() => {
    axios
      .get(`/api/posts?autor=${id}`)
      .then((res) => {
        setDataPosts(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.options}>
          <ul className={styles.list}>
            {role ? optionsList.map(mapList) : optionListEditor.map(mapList)}
          </ul>
        </div>
        <div className={styles.body}>
          <header className={styles.headerBody}>
            <h2>
              Bienvenido{" "}
              <span className={styles.autorHeader}>{!!user && user.name}</span>
            </h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisl eget consectetur consectetur, nisi nisl tincidunt
              nisi, eu consectetur nisl nisi vitae nisl.
            </span>
          </header>
          <div className={styles.bodyContent}>
            <div className={styles.cards}>
              <QueryReports
                element={{ title: "POSTS", data: dataPosts,}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role, id } = verify(sessionJWT, process.env.SECRET);
  return {
    props: {
      data: {
        role,
        id,
      },
    },
  };
}
