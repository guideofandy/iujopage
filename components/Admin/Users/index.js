import styles from '../../../pages/admin/admin.module.css';
import Button from '../../Button';
import Usuarios from './Usuarios/index';
import useActive from '../../../hooks/useActive';
import CreateUser from './CreateUser';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Users = () => {

  const { active, handleActiveChange } = useActive();
  const [mode, setMode] = useState(null)

  const handleModeChange = (data) => {
    handleActiveChange()
    setMode(data)
  }

  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>Usuarios</p>
        <div className={styles.buttons}>
          {active ?
            <>
              {mode ? <Button eventClick={() => setMode(false)} color="black" title="Actualizar" />
                : <Button eventClick={() => setMode(true)} color="green" title="Nuevo" />}
              <AiOutlineCloseCircle color="black" size="2rem" onClick={handleActiveChange} />
            </>
            : <>
              <Button eventClick={() => handleModeChange(false)} color="black" title="Actualizar" />
              <Button eventClick={() => handleModeChange(true)} color="green" title="Nuevo" />
            </>}

        </div>
      </header>
      <div className={active ? `${styles.bodyOption} ${styles.active}` : styles.bodyOption}>
        <div className={styles.formUpdate}>
          {mode ? <CreateUser /> : <Usuarios />}
        </div>
      </div>
    </div>
  )
}

export default Users