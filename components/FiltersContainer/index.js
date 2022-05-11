import styles from "../../styles/Noticias.module.css";
import Button from "../Button";
import {AutorType} from "../Data/Post/filtersType";
import {CareerType} from "../Data/Post/filtersType";
import FilterButton from "../FilterButton";

const FiltersContainer = ({action, autors, careers}) => {
  return (<>
    <div className={styles.filters}>
      <div className={styles.construct}>EN CONSTRUCCION</div>
      <div className={styles.filterAutor}>
        {autors.map((element, key) => <FilterButton key={key} action={action} element={element} />)}
      </div>
      <div className={styles.filterAutor}>
        {careers.map((element, key) => <FilterButton key={key} action={action} element={element} />)}
      </div>
      <Button color="black" title="Buscar" eventClick={action.updateFilters} />
    </div>
  </>);
}

export default FiltersContainer;
