import Careers from "../../../components/Careers";
import AdministracionData from "../../../components/Data/AdministracionData";

const Administracion = () => {

  const { career, profile, profileList, skills, pensumURL } = AdministracionData();

  return (
    <Careers
      color="#78281F"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Administracion