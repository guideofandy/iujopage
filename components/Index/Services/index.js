import Card from "./Card"
import styles from "./Services.module.css"
import servicesData from "../../Data/Services/servicesData"

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Servicios</h2>
      <div className={styles.cards}>
        {servicesData().map((service, key) => <Card key={key} title={service.title} route={service.route} path={service.path} /> )}
      </div>
    </section>
  )
}

export default Services