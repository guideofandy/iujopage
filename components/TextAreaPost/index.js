import { useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import Button from '../Button';
import styles from './TextAreaPost.module.css';
import axios from 'axios';

const TextAreaPost = ({ update }) => {

  const [data, setData] = useState({ autorId: "1", type: "Boletin", content: "", title: "" })
  const textArea = useRef();
  const inputTitle = useRef();

  const handleText = () => {
    setData({ ...data, content: textArea.current.value });
  }
  const handleTitle = () => {
    setData({ ...data, title: inputTitle.current.value });
  }

  const HandleSubmit = () => {
    axios.post("/api/posts/", data)
      .then((response) => {
        console.log(response);
        update();
        setData({ autorId: "1", type: "Boletin", content: "", title: "" })
      })
  }

  return (
    <div className={styles.newPost}>
      <input ref={inputTitle} onChange={handleTitle} type="text" placeholder="Titulo" value={data.title} />
      <textarea
        className={styles.textarea}
        ref={textArea}
        value={data.content}
        onChange={handleText}
        placeholder={"¿Que hay de nuevo en el Instituto?"}
      />
      <div className={styles.footer}>
        <div className={styles.elements}>
          <FiImage color="#212121" size={"1.5rem"}/>
        </div>
        <div className={styles.send}>
          <Button eventClick={HandleSubmit} title="Enviar" color="black" />
        </div>
      </div>
    </div>
  )
}

export default TextAreaPost