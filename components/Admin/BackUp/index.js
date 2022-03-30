import styles from '../../../pages/admin/admin.module.css';
import useActive from '../../../hooks/useActive';
import Button from '../../Button'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const BackUp = () => {

  const { active, handleActiveChange } = useActive();

  return (
    <div className={styles.option}>
      <header className={styles.headerOption}>
        <p>BackUp</p>
        {active ?
          <AiOutlineCloseCircle color="black" size="2rem" onClick={handleActiveChange} />
          : <Button eventClick={handleActiveChange} color="green" title="Respaldar" />}
      </header>
      <div className={styles.bodyOption}>
      </div>
    </div>
  )
}

export default BackUp