import styles from './Carreras.module.css';

const Carreras = () => {
  return (
    <div className='container' style={{justifyContent: 'center'}}>
      <div className={styles.gridContainer}>
        <div className={styles.block+" "+styles.blue}>
          Informatica
        </div>
        <div className={styles.block+" "+styles.gray}>
          Electronica
        </div>
        <div className={styles.block+" "+styles.gray}>
          Electrotecnia
        </div>
        <div className={styles.block+" "+styles.red}>
          Administración
        </div>
        <div className={styles.block+" "+styles.red}>
          Contaduria
        </div>
        <div className={styles.block+" "+styles.yellow}>
          Mecanica
        </div>
        <div className={styles.block+" "+styles.green}>
          Educacion Preescolar
        </div>
        <div className={styles.block+" "+styles.green}>
          Educacion Integral
        </div>
        <div className={styles.block+" "+styles.green}>
          Educacion Especial
        </div>
      </div>

    </div>
  )
}

export default Carreras