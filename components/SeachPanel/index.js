import styles from "./SeachPanel.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import removeAccent from "../../helpers/removeAccents";

const SeachPanel = ({ search, getPosts, data, searchWithTags ,getPostsByAutor, handleTag }) => {
  const { autors, careers } = data;
  const [text, setText] = useState("");
  const [textNotFiltered, setTextNotFiltered] = useState('');
  const [textFiltered, setTextFiltered] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [notFiltered, setNotFiltered] = useState(0);

  const handleChange = ({ target }) => {
    AnalizeText(target.value);
  };

  const SearchFunction = () => {
    if (text.trim().length > 2) {
      if (textFiltered.length > 0 && notFiltered > 0) {
        searchWithTags(textNotFiltered, textFiltered, 0);
      } else if(textFiltered.length > 0 && notFiltered === 0){
        handleTag(textFiltered);
      } else {
        search(text);
        setAutocomplete([]);
      }
    } else if (text.length === 0) {
      getPosts();
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      SearchFunction();
    }
  };

  const AnalizeText = (value) => {
    setAutocomplete([]);
    let arrayWords = value.toLowerCase().split(" ");
    let tags = [];
    let textWithOutFilters = [];
    let wordsNotFiltered = 0;
    let autocompleteTemp = [];
    for (let i = 0; i < arrayWords.length; i++) {
      let word = arrayWords[i].split("");
      if (word[0] === "#") {
        tags.push(word.join("").slice(1));
        arrayWords[i] = word.join("").slice(1);
      } else {
        wordsNotFiltered++;
        textWithOutFilters.push(arrayWords[i]);
      }
      autors.forEach((autor) => {
        if (
          removeAccent(autor.name.toLowerCase()) ===
          removeAccent(arrayWords[i].toLowerCase())
        ) {
          if (
            autocompleteTemp.filter((el) => el.name === autor.name).length === 0
          ) {
            autocompleteTemp.push({ ...autor, type: "Autor" });
          }
        }
      });
      careers.forEach((career) => {
        if (
          removeAccent(career.name.toLowerCase()) ===
          removeAccent(arrayWords[i].toLowerCase())
        ) {
          if (
            autocompleteTemp.filter((el) => el.name === career.name).length ===
            0
          ) {
            autocompleteTemp.push({ ...career, type: "Carrera" });
          }
        }
      });
    }

    setTextNotFiltered(textWithOutFilters.join(" "))
    setNotFiltered(wordsNotFiltered);
    setAutocomplete(autocompleteTemp);
    setText(value);
    setTextFiltered(tags);
  };
  
  const onClickOption = (id, name) => {
    getPostsByAutor(id, name);
    setAutocomplete([]);
  };

  const Option = ({ element, onClick }) => {
    const { name, type, id } = element;

    return (
      <div onClick={() => onClick(id, name)} className={styles.autocompleteElement}>
        <span className={styles.name}>{name}</span>
        <span className={styles.type}>{type}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <div className={styles.InputContainer}>
          <div className={styles.inputModal}>Presiona Enter para Buscar</div>
          <AiOutlineSearch size="1rem" color="#212121cc" />
          <input
            type="text"
            onKeyUp={handleEnter}
            onChange={handleChange}
            className={styles.input}
            placeholder={"Buscar titulos o autores"}
          />
          <div className={styles.buttonSearch} onClick={SearchFunction}>
            Buscar
          </div>
        </div>
        {autocomplete.length > 0 && (
          <div className={styles.autocomplete}>
            {autocomplete.map((element, key) => (
              <Option onClick={onClickOption} key={key} element={element} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeachPanel;
