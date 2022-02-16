import Careers from "../../../components/Careers"
import ElectrotecniaData from "../../../components/Data/Careers/ElectrotecniaData";

const Electrotecnia = () => {

  const { career, profile, profileList, skills, pensumURL } = ElectrotecniaData();

  return (
    <Careers
      color="#616161"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Electrotecnia