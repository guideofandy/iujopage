import styles from '../../../pages/admin/admin.module.css';
import Link from 'next/link'

const Users = () => {
  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Usuarios</p>
        <div>
          <Link href={"/admin/usuarios"}>
            <a>Editar</a>
          </Link>
          <Link href={"/admin/usuario"}>
            <a>Crear</a>
          </Link>
        </div>
      </header>
      <div className={styles.bodyOption}>
      </div>
    </div>
  )
}

export default Users