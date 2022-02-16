import Card from "./Card"
import styles from "./Services.module.css"

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Servicios</h2>
      <div className={styles.cards}>
        <Card title={"Control de estudios"} path={"/img/controlestudio.jpg"} />
        <Card title={"Formacion complementaria"} path={"/img/formacion.jpg"} />
        <Card title={"Bienestar estudiantil"} path={"/img/controlestudio.jpg"} />
        <Card title={"Biblioteca"} path={"/img/Biblioteca.jpg"} />
        <Card title={"Unidad de tecnología"} path={"/img/tecnologia.jpg"} />
        <Card title={"Servicio comunitario"} path={"/img/servicio.jpg"} />
      </div>
    </section>
  )
}

export default Services