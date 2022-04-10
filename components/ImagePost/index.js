import {FiImage} from "react-icons/fi";
import styles from "./ImagePost.module.css";

const ImagePost = ({setImage}) => {
  const icon = () => {
    return <FiImage color="#212121" size={"1.5rem"} />;
  };

  const convertImageToBase64 = (file) => {
    try {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onprogress = (e) => {
          if (e.lengthComputable) {
            const percentLoaded = Math.round((e.loaded / e.total) * 100);
            console.log(percentLoaded);
          }
        };
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    convertImageToBase64(file).then((data) => {
      setImage(data);
    });
  };

  return <input type="file" className={styles.input} onChange={handleImage} />;
};

export default ImagePost;
