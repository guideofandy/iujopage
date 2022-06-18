import useOptionsList from "../../../hooks/useOptionsList";
import styles from "../admin.module.css";
import Button from "../../../components/Button";
import { verify } from "jsonwebtoken";
import PostsController from "../../../db/Controllers/PostController";
import QueryReports from "../../../components/QueryReports";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../../components/Spinner";
import PostTemplete from "../../../components/Reports/PostsTemplete";

const Reportes = ({ data }) => {
  const { role, postCount } = data;
  const [dataPosts, setDataPosts] = useState(postCount);
  const [bitacora, setBitacora] = useState([]);
  const [time, setTime] = useState("1");
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const { optionsList, optionListEditor, mapList } = useOptionsList({
    name: "Reportes",
  });

  const getLogs = () => {
    setPage(page + 1);
    setLoader(true);
    axios
      .get(`/api/reports?page=${page + 1}`)
      .then((res) => {
        const {
          data: { logs },
        } = res;
        setBitacora([...bitacora, ...logs.rows]);
        setTotal(logs.count);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (bitacora.length < 1) {
      axios
        .get(`/api/reports?page=${page}`)
        .then((res) => {
          setBitacora(res.data.logs.rows);
          setTotal(res.data.logs.count);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios
      .get(`/api/admin/post?month=${time}`)
      .then((res) => {
        setDataPosts(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [time]);

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
            <h2>Reportes</h2>
          </header>
          <h2>Usuarios y Posts</h2>
          <div className={styles.lineInput}>
            <select
              className={styles.select}
              onChange={({ target }) => setTime(target.value)}
            >
              <option value="1">Ultimo mes</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
            </select>
            <Button
              eventClick={PostTemplete}
              color={"green"}
              title={"Generar"}
            />
          </div>
          <div className={styles.cards}>
            <QueryReports
              element={{ title: "POSTS", data: dataPosts, time: time }}
            />
          </div>
          <h2>Bitacora</h2>
          <div className={styles.lineInput}>
            <Button
              eventClick={() => PostTemplete("bitacora")}
              color={"green"}
              title={"Generar"}
            />
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.id}>id</th>
                <th>Usuario</th>
                <th>Evento</th>
                <th>Modulo</th>
                <th>Fecha</th>
              </tr>
            </thead>
            {loader && <Spinner />}
            <tbody>
              {bitacora.map((element) => (
                <tr key={element.id}>
                  <td className={styles.id}>{element.id}</td>
                  <td>{element.user.name}</td>
                  <td>{element.event}</td>
                  <td>{element.module}</td>
                  <td>
                    {element.createdAt.split("T")[0]}{" "}
                    {element.createdAt.split("T")[1].slice(0, 8)}
                  </td>
                </tr>
              ))}
              {total > bitacora.length && (
                <tr>
                  <div style={{ cursor: "pointer" }} onClick={getLogs}>
                    ... Cargar mas
                  </div>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reportes;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role } = verify(sessionJWT, process.env.SECRET);
  const postCount = await PostsController.getPostCount();
  return {
    props: {
      data: {
        pre: process.env.PREINSCRIPCION,
        postCount,
        role,
      },
    },
  };
}
