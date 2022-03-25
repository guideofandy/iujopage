import styles from '../../../pages/admin/admin.module.css';
import useActive from '../../../hooks/useActive';
import Button from '../../Button';

const Account = () => {

  const { active, handleActiveChange } = useActive();

  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Cuenta</p>
        {active ?
          <Button eventClick={handleActiveChange} color="black" title="Cerrar" />
          : <Button eventClick={handleActiveChange} color="black" title="Actualizar" />}

      </header>
      <div className={active ? `${styles.bodyOption} ${styles.active}` : styles.bodyOption}>
        <div className={styles.formUpdate}>
          <div className={styles.leftPosition}>
            <div className={styles.lineInput}>
              <input className={styles.inputForm} placeholder="Name" type="text" />
              <Button color={'green'} title={'Guardar'} />
            </div>
            <div className={styles.lineInput}>
              <input className={styles.inputForm} placeholder="Correo" type="text" />
              <Button color={'green'} title={'Guardar'} />
            </div>
            <div className={styles.lineInput}>
              <input className={styles.inputForm} placeholder="Constraseña" type="password" />
            </div>
            <div className={styles.lineInput} >
              <input className={styles.inputForm} placeholder="Repetir Contraseña" type="password" />
              <Button color={'green'} title={'Guardar'} />
            </div>
          </div>

        </div >
      </div >
    </div >
  )
}

export default Account