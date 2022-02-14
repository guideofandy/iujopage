import Card from "./Card"
import styles from "./Services.module.css"

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Servicios</h2>
      <div className={styles.cards}>
        <Card title={"Control de estudios"} path={"/img/controlestudio.jpg"} />
        <Card title={"Formacion complementaria"} path={"/img/controlestudio.jpg"} />
        <Card title={"Bienestar estudiantil"} path={"/img/controlestudio.jpg"} />
        <Card title={"Bienestar estudiantil"} path={"/img/controlestudio.jpg"} />
        <Card title={"Bienestar estudiantil"} path={"/img/controlestudio.jpg"} />
        <Card title={"Bienestar estudiantil"} path={"/img/controlestudio.jpg"} />
      </div>
    </section>
  )
}

export default Services