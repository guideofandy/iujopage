import styles from '../TextAreaPost/TextAreaPost.module.css';
import {useRef} from 'react';

const AutocompleteInput = ({setTags}) => {

  const inputTags = useRef();

  const handleTags = async () => {
    const Tags = inputTags.current.value.split(',');
    const TagsClean = await Tags.map(el => el.trim()).filter(el => el !== '');
    const TagsFailed = await TagsClean.find(el => el.length > 15 ? true : false);
    if (TagsFailed !== undefined) {
      inputTags.current.className = styles.inputTag + ' ' + styles.error;
    } else {
      inputTags.current.className = styles.inputTag;
    }
    const convertedTags = await TagsClean.map(el => {return {name: el}})
    setTags(convertedTags)
  }

  return (
    <div className={styles.tags}>
      <div className={styles.example}>Ej: Etiqueta 1 , Etiqueta 2 , etc</div>
      <input onChange={handleTags} ref={inputTags} placeholder="Etiquetas" className={styles.inputTag} type="text" />
    </div>
  );
}

export default AutocompleteInput;
