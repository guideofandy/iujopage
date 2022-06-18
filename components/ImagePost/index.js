import { FiImage } from "react-icons/fi";
import styles from "./ImagePost.module.css";

const ImagePost = ({ setImage }) => {
  const icon = () => {
    return <FiImage color="#212121" size={"1.5rem"} />;
  };

  return (
    <div className={styles.imageButtom}>
      {icon()}
      <input type="file" className={styles.input} onChange={setImage} />
    </div>
  );
};

export default ImagePost;
