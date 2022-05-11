import styles from "./TagSearch.module.css";

const TagSearch = ({ data, handleTag }) => {
  return (
    <ol className={styles.container}>
      
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
