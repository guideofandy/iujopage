import styles from './Carreras.module.css';
import BoxCarrer from '../../components/BoxCarrer';
import {getCareers} from '../../db/Controllers/CareerController';

const Carreras = ({data}) => {
  return (
    <div className='container' style={{justifyContent: 'center'}}>
      <div className={styles.gridContainer}>
        {(!!data && data.length > 0) && data.map((career, index) => <BoxCarrer key={index} element={career} />)}
      </div>
    </div>
  )
}

export default Carreras

export async function getServerSideProps() {
  const data = await getCareers();
  return {
    props: {data}
  }
}
