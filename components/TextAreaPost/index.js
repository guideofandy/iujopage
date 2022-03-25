import { useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import Button from '../Button';
import styles from './TextAreaPost.module.css';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const TextAreaPost = ({ update }) => {

  const initialState = { type: "Boletin", content: "", title: "", tag: [] }

  const { user } = useAuth();
  const [data, setData] = useState(initialState)
  const textArea = useRef();
  const inputTitle = useRef();
  const inputTags = useRef();

  const handleText = () => {
    setData({ ...data, content: textArea.current.value });
  }
  const handleTitle = () => {
    setData({ ...data, title: inputTitle.current.value });
  }

  const handleTags = async () => {
    const Tags = inputTags.current.value.split(',');
    const TagsClean = await Tags.map(el => el.trim());
    const TagsFilter = await TagsClean.filter(el => el !== '');
    const TagsFailed = await TagsFilter.find(el => el.length > 15 ? true : false);
    if (TagsFailed !== undefined) {
      inputTags.current.className = styles.inputTag + ' ' + styles.error;
    } else {
      inputTags.current.className = styles.inputTag;
    }
    const convertedTags = await TagsFilter.map(el => { return { name: el } })
    setData({ ...data, tag: convertedTags, tagInput: inputTags.current.value })
  }

  const HandleSubmit = () => {
    const config = {
      headers: {
        Authorization: `Bareer ${user.token}`
      }
    }
    axios.post("/api/posts/", data, config)
      .then(() => {
        update();
        setData(initialState);
        inputTags.current.value = ''
      }).catch(e => console.log(e.response))
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
          <FiImage color="#212121" size={"1.5rem"} />
          <input onChange={handleTags} ref={inputTags} placeholder="Etiquetas" className={styles.inputTag} type="text" />
        </div>
        <div className={styles.send}>
          <Button eventClick={HandleSubmit} title="Enviar" color="black" />
        </div>
      </div>
    </div>
  )
}

export default TextAreaPost