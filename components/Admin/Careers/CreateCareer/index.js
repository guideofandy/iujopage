import InputText from "../../../InputText";
import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import {useState} from "react";

const CreateCareer = () => {
	const [skills, setSkills] = useState([{name: "Fumar porros"}, {name: "Alquilar cigarros"}]);
	const [profiles, setProfiles] = useState([{name: "Fumar porros"}, {name: "Alquilar cigarros"}]);
	const [skillsInput, setSkillsInput] = useState("");
	const [profilesInput, setProfilesInput] = useState("");

	const handleSkills = ({target}) => {
		setSkillsInput(target.value);
	}

	const handleProfiles = ({target}) => {
		setProfilesInput(target.value);
	}

	const addSkill = () => {
		setSkills([...skills, {name: skillsInput}]);
	}

	const addProfile = () => {
		setProfiles([...profiles, {name: profilesInput}]);
	}

	const deleteSkill = (index) => {
		const newSkills = skills.filter((skill, i) => i !== index);
		setSkills(newSkills);
	}

	const deleteProfile = (index) => {
		const newProfiles = profiles.filter((profile, i) => i !== index);
		setProfiles(newProfiles);
	}

	return (
		<>
			<div className={styles.input}>
				<InputText
					className={styles.inputForm}
					placeholder="Nombre de la carrera"
					type="text"
				/>
				<span>(Este nombre aparecera en las listas)</span>
			</div>
			<div className={styles.input}>
				<InputText
					className={styles.inputForm}
					placeholder="titulo"
					type="text"
				/>
				<span>
					(Este es el titulo que obtendran los egresados del instituto)
				</span>
			</div>
			<div className={styles.input}>
				<InputText placeholder="Ruta URL" type="text" />
				<span>
					(Esta sera la ruta posterior a carreras/[ruta url] ejemplo:
					carreras/informatica), no agregar "/"
				</span>
			</div>
			<div className={styles.input}>
				<InputText type="textarea" placeholder="Perfil del egresado" />
				<span>(Esta contraseña será usada para iniciar sesión)</span>
			</div>
			<div className={styles.lineInput}>
				<div className={styles.input}>
					<InputText type="text" placeholder="Perfiles del egresado" onChange={handleProfiles} />
					<span>(Esta lista aparecera debajo de el perfil del egresado) debe darle click a "+" por cada perfil que agregue</span>
				</div>
				<Button title="+" color="green" eventClick={addProfile} />
			</div>
			{profiles.map((el, key) => (
				<div key={key} className={styles.lineInput}>
					<span>{el.name}</span>
					<Button title="-" color="red" eventClick={() => deleteProfile(key)} />
				</div>
			))}
			<div className={styles.lineInput}>
				<div className={styles.input}>
					<InputText type="text" onChange={handleSkills} placeholder="Habilidades" />
					<span>(Estos son las habilidades que poseerá los egresados del instituto.) debe darle click a "+" por cada perfil que agregue</span>
				</div>
				<Button title="+" color="green" eventClick={addSkill} />
			</div>
			{skills.map((el, key) => (
				<div key={key} className={styles.lineInput}>
					<span>{el.name}</span>
					<Button title="-" eventClick={() => deleteSkill(key)} color="red" />
				</div>
			))}
			<div className={styles.input}>
				<Button color="black" title="Registrar Carrera" type="submit" />
			</div>
		</>
	);
};

export default CreateCareer;
