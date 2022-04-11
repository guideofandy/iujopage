import Button from "../Button";
import styles from "./Careers.module.css";

const Careers = ({career, profile, profileList, skills, color, pensum}) => {
  return (
    <div style={{}} className="container">
      <header className={styles.header + " " + color}>
        <div className={styles.headerText}>
          <h2>{career}</h2>
          <span>Instituto Universitario Jesús Obrero</span>
        </div>
      </header>
      <div className={styles.showPensum}>
        <Button path={pensum} title="Descargar pensum" />
      </div>
      <div className={styles.section}>
        <h3 className={styles.headerSectionText}>PERFIL DEL EGRESADO</h3>
        <section>
          <p className={styles.sectionText}>
            {profile}
          </p>
          <ul>
            {profileList}
          </ul>
        </section>
      </div>
      <div className={styles.section}>
        <h3 className={styles.headerSectionText}>HABILIDADES</h3>
        <section>
          <ul>
            {skills}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Careers
