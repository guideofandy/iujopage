import Careers from "../../../components/Careers"
import ElectronicaData from "../../../components/Data/ElectronicaData"

const Electronica = () => {

  const { career, profile, profileList, skills, pensumURL } = ElectronicaData();

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

export default Electronica