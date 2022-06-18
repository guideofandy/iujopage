import UserController from "../../../db/Controllers/UserController";
import useOptionsList from "../../../hooks/useOptionsList"
import styles from "../admin.module.css";
import Users from "../../../components/Admin/Users"
import { verify } from "jsonwebtoken";

const Usuarios = ({data}) => {

  const {role} = data;
  const { optionsList , optionListEditor, mapList } = useOptionsList({name: "Usuarios"});

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.options}>
          <ul className={styles.list}>
            {role ? optionsList.map(mapList) : optionListEditor.map(mapList)}
          </ul>
        </div>
        <div className={styles.body}>
          <Users data={data.users}/>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role } = verify(sessionJWT, process.env.SECRET);
  const users = await UserController.getAllUsers();
  return {
    props: {
      data: {
        pre: process.env.PREINSCRIPCION,
        users,
        role,
      },
    },
  };
}
