import styles from "./admin.module.css";
import Account from "../../components/Admin/Account";
import Reports from "../../components/Admin/Reports";
import BackUp from "../../components/Admin/BackUp";
import Users from "../../components/Admin/Users";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = ({ pre }) => {

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) {
      router.push('/')
    }
  }, [user])

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

export async function getStaticProps() {
  const data = { pre: process.env.PREINSCRIPCION }
  return { props: data }
}