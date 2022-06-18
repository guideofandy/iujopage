import styles from "../TextAreaPost/TextAreaPost.module.css";
import { useState } from "react";

const AutocompleteInput = ({initialState, setTags, inputTags }) => {

  const [value, setValue] = useState(initialState);
 
  const handleTags = async () => {
    setValue(inputTags.current.value.trim());
    const Tags = inputTags.current.value.split(",");
    const TagsClean = await Tags.map((el) => {
      if (el.includes(" ")) {
        return el.replace(/\s/g, "");
      } else {
        return el;
      }
    }).filter((el) => el !== "");
    const TagsFailed = await TagsClean.find((el) =>
      el.length > 15 ? true : false
    );
    if (TagsFailed !== undefined) {
      inputTags.current.className = styles.inputTag + " " + styles.error;
    } else {
      inputTags.current.className = styles.inputTag;
    }
    const convertedTags = await TagsClean.map((el) => {
      return { name: el };
    });
    setTags(convertedTags);
  };

  return (
    <div className={styles.tags}>
      <div className={styles.example}>Ej: Etiqueta1 , Etiqueta2 , etc</div>
      <input
        onChange={handleTags}
        ref={inputTags}
        placeholder="Etiquetas"
        className={styles.inputTag}
        value={value}
        type="text"
      />
    </div>
  );
};

export default AutocompleteInput;
