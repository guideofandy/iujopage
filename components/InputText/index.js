import styles from './InputText.module.css';

const InputText = ({type = "text", onChange, placeholder}) => {
  if (type === "textarea") {
    return (
      <textarea className={styles.textarea} onChange={onChange} placeholder={placeholder}></textarea>
    )
  }
  return <input type={type} onChange={onChange} className={styles.input} placeholder={placeholder} />;
}

export default InputText;
