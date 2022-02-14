import styles from './Carreras.module.css';
import carrerData from '../../components/Data/carrerData';
import BoxCarrer from '../../components/BoxCarrer';

const Carreras = () => {
  return (
    <div className='container' style={{ justifyContent: 'center' }}>
      <div className={styles.gridContainer}>
        {carrerData().map((element, key) => <BoxCarrer key={key} element={element} />)}
      </div>
    </div>
  )
}

export default Carreras