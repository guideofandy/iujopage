import { useRef, useState } from "react";
import ImagePost from "../ImagePost";
import Button from "../Button";
import styles from "./TextAreaPost.module.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AutocompleteInput from "../AutocompleteInput";
import Message from "../Message";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from "../Spinner";

const TextAreaPost = ({ update, handleEdit: cancel, initialData, edit }) => {
  const initialState =
    initialData !== undefined
      ? initialData
      : { content: "", title: "", tag: [], image: null };
  const tagText = initialState.tag.map((tag) => tag.name).join(", ");
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  const [tag, setTag] = useState(initialState.tag);
  const [image, setImage] = useState(initialState.image);
  const { user } = useAuth();
  const [error, setError] = useState("");
  const inputTags = useRef();
  const [firstImage, setFirstImage] = useState(edit);
  const [loader, setLoader] = useState(false);

  const handleText = ({ target }) => {
    setContent(target.value);
  };
  const handleTitle = ({ target }) => {
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

  const handleImage = ({ target }) => {
    setFirstImage(false);
    setImage(target.files[0]);
  };

  const HandleSubmit = () => {
    if (title.length > 0 && content.length > 0) {
      setLoader(true);
      const config = {
        headers: {
          Authorization: `Bareer ${user.token}`,
          "content-type":
            "multipart/form-data; boundary=--------------------------999619143332017334035581",
        },
      };
      const form = new FormData();
      form.append("file", image);
      form.append("title", title);
      form.append("content", content);
      form.append("tag", JSON.stringify(tag));
      axios
        .post("/api/posts", form, config)
        .then(() => {
          setError("");
          setContent("");
          setTitle("");
          setTag([]);
          setImage(null);
          inputTags.current.value = "";
          update();
        })
        .catch((e) => console.log(e.response))
        .finally(() => setLoader(false));
    } else {
      setError("El titulo y/o el contenido no pueden estar vacios");
    }
  };

  const handleEdit = () => {
    if (title.length > 0 && content.length > 0) {
      setLoader(true);
      const config = {
        headers: {
          Authorization: `Bareer ${user.token}`,
          "content-type":
            "multipart/form-data; boundary=--------------------------999619143332017334035581",
        },
      };
      const form = new FormData();
      form.append("file", image);
      form.append("title", title);
      form.append("content", content);
      form.append("tag", JSON.stringify(tag));
      axios
        .put(`/api/posts/${initialState.id}`, form, config)
        .then(() => {
          cancel();
          update();
          setError("");
          setContent("");
          setTitle("");
          setTag([]);
          setImage(null);
          inputTags.current.value = "";
        })
        .catch((e) => console.log(e.response))
        .finally(() => setLoader(false));
    } else {
      setError("El titulo y/o el contenido no pueden estar vacios");
    }
  };

  return (
    <>
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
              src={firstImage ? image : image && URL.createObjectURL(image)}
              layout="fill"
              objectFit={"cover"}
              alt={"Preview"}
            />
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.elements}>
            <ImagePost setImage={handleImage} />
            <AutocompleteInput
              inputTags={inputTags}
              initialState={tagText}
              setTags={handleTags}
            />
          </div>
          <div className={styles.send}>
            {edit ? (
              <>
                <Button eventClick={cancel} title="Cancelar" color="red" />
                <Button
                  eventClick={handleEdit}
                  title={"Guardar"}
                  color="black"
                />
              </>
            ) : (
              <Button
                eventClick={HandleSubmit}
                title={"Publicar"}
                color="black"
              />
            )}
          </div>
        </div>
      </div>
      {loader && <Spinner />}
    </>
  );
};

export default TextAreaPost;
