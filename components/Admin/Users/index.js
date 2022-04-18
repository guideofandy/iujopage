import styles from "../../../pages/admin/admin.module.css";
import Usuarios from "./Usuarios/index";
import CreateUser from "./CreateUser";
import {useState} from "react";
import Button from "../../Button";

const Users = ({data}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={styles.headerBody}>
        <h2>Usuarios</h2>
        <span>(Creacion y administracion de usuarios)</span>
      </header>
      <h4 className={styles.subtitle}>Crear Usuarios</h4>
      <span>
        Este usuario podra crear y administrar las publicaciones de este
        realice, pero no tendra acceso a opciones de Administrador como:
        Usuarios, Carreras o Servicios.
      </span>
      {show ? (
        <div className={styles.boxBody}>
          <Button color="red" title="-" eventClick={() => setShow(false)} />
          <CreateUser />
        </div>
      ) : (
        <div className={styles.boxBody}>
          <Button color="green" title="+" eventClick={() => setShow(true)} />
        </div>
      )}
      <h4 className={styles.subtitle}>Administrar Usuarios</h4>
      <span>
        Puede editar los datos y habilitar o desabilitar usuarios creados.
      </span>
      <Usuarios data={data} />
    </>
  );
};

export default Users;
