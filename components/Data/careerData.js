import { AiOutlineCode, AiOutlineRead } from 'react-icons/ai';
import { GiElectricalResistance, GiElectric, GiGearHammer, GiKidSlide, GiSpectacleLenses } from 'react-icons/gi';
import { MdAccountTree, MdListAlt } from "react-icons/md";
import styles from "../BoxCarrer/BoxCarrer.module.css";

const careerData = () => {
  return ([
    {
      title: 'Informática',
      path: "/carreras/informatica",
      icon: <AiOutlineCode color='white' size={"3rem"} />,
      color: styles.blue,
    },
    {
      title: 'Electronica',
      path: '/carreras/electronica',
      icon: <GiElectricalResistance color='white' size={"3rem"} />,
      color: styles.gray,
    },
    {
      title: 'Electrotecnia',
      path: '/carreras/electrotecnia',
      icon: <GiElectric color='white' size={"3rem"} />,
      color: styles.gray,
    },
    {
      title: 'Administración',
      icon: <MdAccountTree color='white' size={"3rem"} />,
      color: styles.red,
    },
    {
      title: 'Contaduria',
      icon: <MdListAlt color='white' size={"3rem"} />,
      color: styles.red,
    },
    {
      title: 'Mecanica',
      icon: <GiGearHammer color='white' size={"3rem"} />,
      color: styles.yellow,
    },
    {
      title: 'Educación Preescolar',
      icon: <GiKidSlide color='white' size={"3rem"} />,
      color: styles.green,
    },
    {
      title: 'Educación Integral',
      icon: <AiOutlineRead color='white' size={"3rem"} />,
      color: styles.green,
    },
    {
      title: 'Educación Especial',
      icon: <GiSpectacleLenses color='white' size={"3rem"} />,
      color: styles.green,
    },

  ])
}

export default careerData