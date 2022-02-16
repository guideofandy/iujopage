import Careers from "../../../components/Careers";
import EspecialData from "../../../components/Data/EspecialData";

const Especial = () => {

  const { career, profile, profileList, skills, pensumURL } = EspecialData();

  return (
    <Careers
      color="#1B5E20"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Especial