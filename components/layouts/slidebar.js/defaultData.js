import { CgNotes } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import { MdDesignServices, MdOutlinePostAdd } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

const defaultData = () => {
  return [
    {
      title: "SIGEA",
      path: "http://190.120.252.155:49153/sigea/index.php",
      externalLink: true,
      icon: <CgNotes color='white' size={"2rem"} />,
    },
    {
      title: "CARRERAS",
      path: "/carreras",
      externalLink: false,
      icon: <FaUniversity color='white' size={"2rem"} />,
    },
    {
      title: "SERVICIOS",
      path: "/servicios",
      externalLink: false,
      icon: <MdDesignServices color='white' size={"2rem"} />,
    },
    {
      title: "NOTICIAS",
      path: "/noticias",
      externalLink: false,
      icon: <MdOutlinePostAdd color='white' size={"2rem"} />,
    },
    {
      title: "AULA VIRTUAL",
      path: "https://aulabqto.iujoac.org.ve/",
      externalLink: true,
      icon: <SiGoogleclassroom color='white' size={"2rem"} />,
    },
  ];
}
 
export default defaultData;