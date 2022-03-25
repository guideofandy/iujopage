import { CgNotes } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdDesignServices, MdOutlinePostAdd } from 'react-icons/md';
import { RiSettings4Fill } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai';
import useAuth from '../../../hooks/useAuth';

const SlidebarData = () => {

  const listAdmin = [
    {
      title: "DASHBOARD",
      path: "/dashboard",
      externalLink: false,
      icon: <AiFillHome color='white' size={"2rem"} />,
    },
    {
      title: "NOTICIAS",
      path: "/noticias",
      externalLink: false,
      icon: <MdOutlinePostAdd color='white' size={"2rem"} />,
    },
    {
      title: "OPCIONES",
      path: "/admin",
      externalLink: false,
      icon: <RiSettings4Fill color='white' size={"2rem"} />,
    }
  ]

  const listDefault = [
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
  ]

  const { user } = useAuth();
  if (!!user) {
    return listAdmin;
  } else {
    return listDefault
  }
}

export default SlidebarData