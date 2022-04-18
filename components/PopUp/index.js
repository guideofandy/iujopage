import styles from "./PopUp.module.css";
import {AiOutlineCloseCircle} from "react-icons/ai";

const PopUp = ({element, component, setShow, show}) => {

  const handleClose = () => {
    setShow(show ? false : true);
  };

  const title = "Title"

  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.close} onClick={handleClose}>
          <AiOutlineCloseCircle width={"2rem"} color={"#212121"} />
        </div>
        <h2 className={styles.title}> {title}</h2>
        {component}
      </div>
    </div >
  );
};

export default PopUp; 
