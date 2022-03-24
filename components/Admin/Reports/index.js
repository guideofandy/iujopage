import styles from '../../../pages/admin/admin.module.css';

const Reports = () => {
  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Reportes</p>
        <div>
          <select>
            <option>Usuarios</option>
            <option>pre-inscripciones</option>
          </select>
          <button>Generar</button>
        </div>
      </header>
      <div className={styles.bodyOption}>
      </div>
    </div>
  )
}

export default Reports