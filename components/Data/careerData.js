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
      path: '/carreras/administracion',
      icon: <MdAccountTree color='white' size={"3rem"} />,
      color: styles.red,
    },
    {
      title: 'Contaduria',
      path: '/carreras/contaduria',
      icon: <MdListAlt color='white' size={"3rem"} />,
      color: styles.red,
    },
    {
      title: 'Mecanica',
      path: '/carreras/mecanica',
      icon: <GiGearHammer color='white' size={"3rem"} />,
      color: styles.yellow,
    },
    {
      title: 'Educación Preescolar',
      path: '/carreras/educacion/preescolar',
      icon: <GiKidSlide color='white' size={"3rem"} />,
      color: styles.green,
    },
    {
      title: 'Educación Integral',
      path: '/carreras/educacion/integral',
      icon: <AiOutlineRead color='white' size={"3rem"} />,
      color: styles.green,
    },
    {
      title: 'Educación Especial',
      path: '/carreras/educacion/especial',
      icon: <GiSpectacleLenses color='white' size={"3rem"} />,
      color: styles.green,
    },

  ])
}

export default careerData