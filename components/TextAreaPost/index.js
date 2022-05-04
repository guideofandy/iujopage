import {useRef, useState} from "react";
import ImagePost from "../ImagePost";
import Button from "../Button";
import styles from "./TextAreaPost.module.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AutocompleteInput from "../AutocompleteInput";
import Message from "../Message";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";

const TextAreaPost = ({update}) => {
  const initialState = {content: "", title: "", tag: []};
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  const [tag, setTag] = useState(initialState.tag);
  const [image, setImage] = useState(null);
  const {user} = useAuth();
  const [error, setError] = useState("");
  const inputTags = useRef();

  const handleText = ({target}) => {
    setContent(target.value);
  };
  const handleTitle = ({target}) => {
    if (target.value.length > 50) {
      setError("El titulo no puede contener mas de 50 caracteres");
    } else {
      setError("");
      setTitle(target.value);
    }
  };

  const handleTags = (tags) => {
    setTag(tags);
  };

  const handleImage = (value) => {
    setImage(value);
  };

  const HandleSubmit = () => {
    if (title.length > 0 && content.length > 0) {
      const config = {
        headers: {
          Authorization: `Bareer ${user.token}`,
        },
      };
      axios
        .post("/api/posts/", {title, content, tag, image}, config)
        .then(() => {
          update();
          setError("");
          setContent("");
          setTitle("");
          setTag([]);
          setImage(null);
          inputTags.current.value = "";
        })
        .catch((e) => console.log(e.response));
    } else {
      setError("El titulo y/o el contenido no pueden estar vacios");
    }
  };

  return (
    <div className={styles.newPost}>
      {error !== "" && <Message message={error} />}
      <input
        onChange={handleTitle}
        type="text"
        placeholder="Titulo"
        value={title}
      />
      <textarea
        className={styles.textarea}
        value={content}
        onChange={handleText}
        placeholder={"¿Que hay de nuevo en el Instituto?"}
      />
      {image && (
        <div className={styles.previewImage}>
          <AiOutlineClose
            onClick={() => setImage(null)}
            className={styles.closeImage}
            size={"2rem"}
            color={"white"}
          />
          <Image
            src={image}
            layout="fill"
            objectFit={"cover"}
            alt={"Preview"}
          />
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.elements}>
          <ImagePost setImage={handleImage} />
          <AutocompleteInput inputTags={inputTags} setTags={handleTags} />
        </div>
        <div className={styles.send}>
          <Button eventClick={HandleSubmit} title="Publicar" color="black" />
        </div>
      </div>
    </div>
  );
};

export default TextAreaPost;
