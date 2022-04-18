import styles from "./admin.module.css";
import Account from "../../components/Admin/Account";
import Reports from "../../components/Admin/Reports";
import BackUp from "../../components/Admin/BackUp";
import Users from "../../components/Admin/Users";
import Services from "../../components/Admin/Services";
import Careers from "../../components/Admin/Careers";
import PopUp from "../../components/PopUp";
import {useState} from "react";

const Admin = ({data}) => {
  const {pre, role, users, services, careers} = data;
  const [show, setShow] = useState({state: false});

  return (
    <div className="container">
      {show.state && <PopUp show={show} setShow={setShow} />}
      <div className={styles.content}>
        <Account />
        <div className={styles.option}>
          <header className={styles.headerOption}>
            <p>Pre-inscripciones</p>
            {pre === "true" ? (
              <button className={styles.buttonActive}>ACTIVO</button>
            ) : (
              <button className={styles.buttonInactive}>INACTIVO</button>
            )}
          </header>
        </div>
        {role && (
          <>
            <Users data={users} setShow={setShow} />
            <Services data={services} setShow={setShow} />
            <Careers data={careers} setShow={setShow} />
            <Reports />
            <BackUp />
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;

