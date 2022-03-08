import styles from './MessageTop.module.css';
import { BsArrowRightShort } from 'react-icons/bs'
import Button from '../Button';

const MessageTop = ({ message }) => {
  return (
    <div className={styles.Message}>
      <div className={styles.MessageText}>
        <span>{message}</span>
        <BsArrowRightShort color="white" size={"2rem"} />
      </div>
      <Button title="SOPORTE" />
    </div>
  )
}

export default MessageTop