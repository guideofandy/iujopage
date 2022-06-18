import styles from "./TagSearch.module.css";

const TagSearch = ({ data, handleTag }) => {
  return (
    <ol className={styles.container}>
      <li className={styles.tag}>
        <b>Etiquetas mas usadas</b>
      </li>
      {data.map(({name,countTags}, index) => (
        <li
          onClick={() => handleTag(name)}
          key={index}
          className={styles.tag}
        >
          <b>#{name.toUpperCase()}</b>
          <span>{countTags} Publicaciones</span>
        </li>
      ))}
    </ol>
  );
};

export default TagSearch;
