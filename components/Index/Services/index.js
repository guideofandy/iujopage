import Card from "./Card"
import styles from "./Services.module.css"

const Services = ({data}) => {
  return (
    <section className={styles.services}>
      <h2>Servicios</h2>
      <div className={styles.cards}>
        {data.map((service, key) => <Card key={key} element={service} />)}
      </div>
    </section>
  )
}

export default Services
