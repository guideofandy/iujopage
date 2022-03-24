import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import FilterButton from "../../components/FilterButton";
import { AutorType, CareerType } from "../../components/Data/Post/filtersType";
import { getPosts } from "../../db/Controllers/PostController";
import Button from "../../components/Button";

const Noticias = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.filters}>
          <h3>
            Buscar por fecha
          </h3>
          <input type="date" />
          <h3>
            Buscar por Autor
          </h3>
          <div className={styles.filterAutor}>
            {AutorType().map((element, key) => <FilterButton key={key} element={element} />)}
          </div>
          <h3>
            Buscar por carrera
          </h3>
          <div className={styles.filterAutor}>
            {CareerType().map((element, key) => <FilterButton key={key} element={element} />)}
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

        <div className={styles.posts}>
          {!!data && data.map((element, key) => <PostContainer key={key} element={element} />)}
        </div>
        <div className={styles.none}>

        </div>
      </div>
    </div>
  )
}

export default Noticias

export async function getServerSideProps() {
  const data = await getPosts();
  return { props: { data } };
}