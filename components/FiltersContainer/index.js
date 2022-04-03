import styles from "../../styles/Noticias.module.css";
import Button from "../Button";
import { AutorType } from "../Data/Post/filtersType";
import { CareerType } from "../Data/Post/filtersType";
import FilterButton from "../FilterButton";

const FiltersContainer = ({ action }) => {
  return (<>
    <div className={styles.filters}>
      <h3>
        Buscar por fecha
      </h3>
      <input type="date" />
      <h3>
        Buscar por Autor
      </h3>
      <div className={styles.filterAutor}>
        {AutorType().map((element, key) => <FilterButton key={key} action={action} element={element} />)}
      </div>
      <h3>
        Buscar por carrera
      </h3>
      <div className={styles.filterAutor}>
        {CareerType().map((element, key) => <FilterButton key={key} action={action} element={element} />)}
      </div>
    </div>
    <div className={styles.filtersResponsive}>
      <select className={styles.select}>
        <option className={styles.option} value="">Filtros</option>
        <option disabled="disabled" value="">Servicios</option>
        {AutorType().map((element, key) => <option className={styles.option} key={key} value={element.type}>{element.name}</option>)}
        <option disabled="disabled" value="">Carreras</option>
        {CareerType().map((element, key) => <option className={styles.option} key={key} value={element.type}>{element.name}</option>)}
      </select>
      <Button title="Buscar" />
    </div>
  </>);
}

export default FiltersContainer;