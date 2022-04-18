import styles from "./Message.module.css";

const Message = ({type = "error", message}) => {
  const getMessage = () => {
    if (typeof message === "string") {
      return <p>{message}</p>;
    } else {
      return message.map((el, key) => {
        return <p key={key}>{el}</p>;
      });
    }
  };

  const getType = () => {
    if (type === "normal") {
      return styles.normal;
    } else if (type === "error") {
      return styles.error;
    } else if (type === "success") {
      return styles.success;
    }
  };

  return (
    <div className={`${styles.message} ${getType()}`}>
      {getMessage()}
    </div>
  );
};

export default Message;
