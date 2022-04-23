import styles from "./InputText.module.css";

const InputText = ({
  type = "text",
  value,
  onEnter,
  onChange,
  placeholder,
}) => {
  const handleEnter = (event) => {
    if (onEnter) {
      if (event.key === "Enter") {
        onEnter();
      }
    }
  };

  if (type === "textarea") {
    return (
      <textarea
        onKeyUp={handleEnter}
        className={styles.textarea}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      onKeyUp={handleEnter}
      type={type}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputText;
