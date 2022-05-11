import styles from "./SeachPanel.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import removeAccent from "../../helpers/removeAccents";

const SeachPanel = ({ search, getPosts, data, getPostsByAutor, handleTag }) => {
  const router = useRouter();
  const { autors, careers } = data;
  const [text, setText] = useState("");
  const [textFiltered, setTextFiltered] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);

  const handleChange = ({ target }) => {
    if (target.value.length > 2) {
      AnalizeText(target.value);
    } else if (target.value.length === 0) {
      getPosts();
    }
  };

  const SearchFunction = () => {
    if (search && text.length > 3) {
      if (textFiltered.length > 0) {
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
    let autocompleteTemp = [];
    for (let i = 0; i < arrayWords.length; i++) {
      let word = arrayWords[i].split("");
      if (word[0] === "#") {
        tags.push(word.join("").slice(1));
        arrayWords[i] = word.join("").slice(1);
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

    setAutocomplete(autocompleteTemp);
    setText(value);
    setTextFiltered(tags);
  };

  const onClickOption = (id) => {
    getPostsByAutor(id);
    setAutocomplete([]);
  };

  const Option = ({ element, onClick }) => {
    const { name, type, id } = element;

    return (
      <div onClick={() => onClick(id)} className={styles.autocompleteElement}>
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
          <div className={styles.buttonSearch} onClick={SearchFunction}>Buscar</div>
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
