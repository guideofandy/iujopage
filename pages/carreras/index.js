import styles from './Carreras.module.css';
import careerData from '../../components/Data/careerData';
import BoxCarrer from '../../components/BoxCarrer';

const Carreras = () => {
  return (
    <div className='container' style={{ justifyContent: 'center' }}>
      <div className={styles.gridContainer}>
        {careerData().map((element, key) => <BoxCarrer key={key} element={element} />)}
      </div>
    </div>
  )
}

export default Carreras