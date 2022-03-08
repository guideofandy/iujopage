import styles from './ServicesTemplete.module.css';
import UPP from '../Data/Services/UPP';


const ServicesTemplete = () => {

  const { email, phone, name, coordinator, description } = UPP();

  return (
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div>
            <h2 className={styles.h2}>{name}</h2>
            <span>Cordinador: {coordinator}</span>
          </div>
          <p>Email: {email}</p>
          <p>Telefono: {phone}</p>
          <p>Descripcion: {description}</p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.posts}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesTemplete