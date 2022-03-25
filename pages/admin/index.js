import styles from "./admin.module.css";
import Account from "../../components/Admin/Account";
import Reports from "../../components/Admin/Reports";
import BackUp from "../../components/Admin/BackUp";
import Users from "../../components/Admin/Users";
import useAuth from "../../hooks/useAuth";

const Admin = ({ pre }) => {

  const { user } = useAuth();

  return (
    <div className='container'>
      <div className={styles.content}>
        <Account />
        <div className={styles.option}>
          <header className={styles.headerOption}>
            <p>Pre-inscripciones</p>
            {pre === 'true' ? <button>ACTIVO</button> : <button>INACTIVO</button>}
          </header>
        </div>
        {!!user && !!user.role && <>
          <Users />
          <Reports />
          <BackUp />
        </>}
      </div>
    </div>
  )
}

export default Admin



export async function getServerSideProps() {
  const data = { pre: process.env.PREINSCRIPCION }
  return { props: data }
}