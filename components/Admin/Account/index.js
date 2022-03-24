import styles from '../../../pages/admin/admin.module.css';

const Account = () => {
  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Cuenta</p>
        <button>Actualizar</button>
      </header>
      <div className={styles.bodyOption}>
      </div>
    </div>
  )
}

export default Account