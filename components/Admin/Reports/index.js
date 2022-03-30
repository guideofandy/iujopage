import styles from '../../../pages/admin/admin.module.css';
import Button from '../../Button';
import useActive from '../../../hooks/useActive';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PostTemplete from '../../Reports/PostsTemplete';

const Reports = () => {

  const { active, handleActiveChange } = useActive();

  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Reportes</p>
        <div className={styles.buttons}>
          {active ?
            <AiOutlineCloseCircle color="black" size="2rem" onClick={handleActiveChange} />
            : <Button eventClick={handleActiveChange} color="black" title="Abrir" />}
        </div>
      </header>
      <div className={active ? `${styles.bodyOption} ${styles.active}` : styles.bodyOption}>
        <div className={styles.formUpdate}>
          <div className={styles.lineInput} >
            <select className={styles.inputForm} placeholder="Repetir Contraseña" type="password">
              <option>Usuarios</option>
            </select>
            <Button eventClick={PostTemplete} color={'green'} title={'Generar'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports