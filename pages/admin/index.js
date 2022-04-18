import styles from "./admin.module.css";
import {useState} from "react";
import Account from "../../components/Admin/Account";
import {getUsers} from "../../db/Controllers/UserController";
import {getDataCareers} from "../../db/Controllers/CareerController";
import {getServices} from "../../db/Controllers/ServiceController";
import verify from "jsonwebtoken/verify";
import verifyToken from "../../helpers/verifyToken";
import Reports from "../../components/Admin/Reports";
import BackUp from "../../components/Admin/BackUp";
import Users from "../../components/Admin/Users";
import useAuth from "../../hooks/useAuth";
import Careers from "../../components/Admin/Careers";

const Admin = ({data}) => {
  const {user} = useAuth();
  const {users, role, careers} = data;

  const optionsList = [
    {name: "Cuenta", Component: <Account />},
    {name: "Usuarios", Component: <Users data={users} />},
    {name: "Carreras", Component: <Careers data={careers} />},
    {name: "Servicios"},
    {name: "BackUp", Component: <BackUp />},
    {name: "Reportes", Component: <Reports />},
  ];

  const optionListEditor = [
    {name: "Cuenta", Component: <Account />},
    {name: "Reportes", Component: <Reports />},
  ];
  const [selected, setSelected] = useState("");

  const mapList = (element, key) => {
    return (
      <li
        key={key}
        onClick={() =>
          setSelected(selected.name !== element.name ? element : "")
        }
        className={
          element.name === selected.name
            ? `${styles.itemList} ${styles.activeOption}`
            : styles.itemList
        }
      >
        {element.name}
      </li>
    );
  };

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.options}>
          <ul className={styles.list}>
            {role ? optionsList.map(mapList) : optionListEditor.map(mapList)}
          </ul>
        </div>
        <div className={styles.body}>
          {selected !== "" ? (
            selected.Component
          ) : (
            <header className={styles.headerBody}>
              <h2>
                Bienvenido{" "}
                <span className={styles.autorHeader}>
                  {!!user && user.name}
                </span>
              </h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisl eget consectetur consectetur, nisi nisl tincidunt
                nisi, eu consectetur nisl nisi vitae nisl.
              </span>
            </header>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

export async function getServerSideProps({req}) {
  const {sessionJWT} = req.cookies;
  const users = await getUsers();
  const services = await getServices();
  const careers = await getDataCareers();
  if (verifyToken(sessionJWT, process.env.SECRET)) {
    const {role} = verify(sessionJWT, process.env.SECRET);
    return {
      props: {
        data: {
          pre: process.env.PREINSCRIPCION,
          role,
          users,
          services,
          careers,
        },
      },
    };
  }
  return {
    redirect: {
      destination: "/logout",
      permanent: true,
    },
  };
}
