import styles from "./Post.module.css";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { BiShare } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import splitText from "../../helpers/splitText";
import TextAreaPost from "../TextAreaPost";
import Spinner from "../Spinner";
import Cookie from "js-cookie";

const PostContainer = ({ element, update, role = "standard" }) => {
  const { autor, title, updatedAt, content, id, tag, image } = element;
  const text = splitText(content);
  const [edit, setEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const Token = Cookie.get("sessionJWT")

  const handleDelete = () => {
    setLoader(true);
    const config = {
      headers: { Authorization: `Bareer ${Token}` },
    };
    axios.delete(`/api/posts/${id}`, config).then(() => {
      update();
      setLoader(false);
    });
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return !edit ? (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <Image src={"/img/fya.png"} alt={"IUJO"} width={355} height={355} />
        </div>
        <div className={styles.headerText}>
          <h5>{autor.name}</h5>
          <span>
            {updatedAt.slice(0, 10)} {updatedAt.slice(11, 16)}
          </span>
        </div>
      </header>
      <section className={styles.body}>
        <h4>{title}</h4>
        {!!text && text.map((el, key) => <p key={key}>{el}</p>)}
        {!!image && (
          <div className={styles.imagePost}>
            <Image
              src={image}
              layout={"fill"}
              priority
              objectFit="cover"
              alt={title}
            />
          </div>
        )}
      </section>
      <footer className={styles.footer}>
        <div className={styles.share}>
          <a>
            Compartir <BiShare color="#212121" />
          </a>
          {role === "admin" && (
            <>
              <a onClick={handleEdit}>
                Editar <AiFillEdit color={"#212121"} />
              </a>
              <a onClick={handleDelete}>
                Eliminar <MdDelete color={"#922f2f"} />
              </a>
            </>
          )}
        </div>
        <div className={styles.tags}>
          {!!tag && tag.map(({ name }, key) => <p key={key}>{name}</p>)}
        </div>
        {loader && <Spinner />}
      </footer>
    </div>
  ) : (
    <TextAreaPost
      edit={edit}
      initialData={element}
      update={update}
      handleEdit={handleEdit}
    />
  );
};

export default PostContainer;
