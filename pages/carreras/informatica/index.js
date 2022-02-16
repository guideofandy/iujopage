import Careers from "../../../components/Careers";
import InformaticaData from "../../../components/Data/InformaticaData";

const Informatica = () => {

  const { career, profile, profileList, skills, pensumURL } = InformaticaData();

  return (
    <Careers
      color="#0d47a1"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Informatica