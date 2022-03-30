import styles from "../../../styles/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import { BiLogOut } from 'react-icons/bi';
import adminData from "./adminData";
import defaultData from "./defaultData";
import SlidebarElement from "./SlidebarElement/index.js";
import useAuth from "../../../hooks/useAuth";

const Slidebar = ({ handleState, state }) => {

  const { user, logOut } = useAuth();

  const SlidebarState = state ? styles.slidebar + " " + styles.active : styles.slidebar;
  const ShowButton = state ? styles.active : styles.inactive;
  return (
    <div className={SlidebarState}>
      <header className={styles.headerSlidebar}>
        {state ?
          <div onClick={handleState} className={ShowButton}>
            <AiOutlineMenu cursor="pointer" color='white' size={"2rem"} />
          </div> :
          <BsArrowBarRight cursor="pointer" color='white' size={"2rem"} />
        }
      </header>

      {!!user && typeof user === 'object' ?
        <>
          {adminData().map((element, key) => <SlidebarElement event={handleState} key={key} element={element} />)}
          <div onClick={logOut} className={styles.SlideElement}>
            <div className={styles.SlideElement}>
              <BiLogOut color='white' size={"2rem"} />
              < span >
                Logout
              </span >
            </div >
          </div>
        </> :
        defaultData().map((element, key) => <SlidebarElement event={handleState} key={key} element={element} />)
      }
    </div>);
};

export default Slidebar;
