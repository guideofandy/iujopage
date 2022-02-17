import PostContainer from "../../components/PostContainer";
import styles from "../../styles/Noticias.module.css";
import PostContent from "../../components/Data/Post/PostContent";
import { useState } from "react";
import FilterButton from "../../components/FilterButton";
import { AutorType, CareerType } from "../../components/Data/Post/filtersType";

const Noticias = () => {

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

        <div className={styles.posts}>
          {PostContent().map((element, key) => <PostContainer key={key} element={element} />)}
        </div>
        <div className={styles.none}>

        </div>
      </div>
    </div>
  )
}

export default Noticias