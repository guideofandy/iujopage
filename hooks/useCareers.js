import axios from "axios";
import { useState } from "react";

const useCareers = () => {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [path, setPath] = useState("");
	const [profile, setProfile] = useState("");
	const [skills, setSkills] = useState([]);
	const [profiles, setProfiles] = useState([]);
	const [skillsInput, setSkillsInput] = useState("");
	const [profilesInput, setProfilesInput] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [color, setColor] = useState("");
	const [icon, setIcon] = useState("");
	const [pensumURL, setPensumURL] = useState("");
	const [deleteSkillsList, setDeleteSkillsList] = useState([]);
	const [deleteProfilesList, setDeleteProfilesList] = useState([]);
	const [skillsOldList, setSkillsOldList] = useState([]);
	const [profilesOldList, setProfilesOldList] = useState([]);

	const handleName = ({ target }) => {
		if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/.test(target.value) || target.value === "") {
			setName(target.value);
		}
	};

	const handleTitle = ({ target }) => {
		if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/.test(target.value) || target.value === "") {
			setTitle(target.value);
		}
	};

	const handlePath = ({ target }) => {
		if (/^[a-zA-Z]+$/.test(target.value) || target.value === "") {
			setPath(target.value);
		}
	};

	const handleProfile = ({ target }) => {
		setProfile(target.value);
	};

	const handleSkills = ({ target }) => {
		setSkillsInput(target.value);
	};

	const handleProfiles = ({ target }) => {
		setProfilesInput(target.value);
	};

	const handlePensumURL = ({ target }) => {
		setPensumURL(target.value);
	};

	const addSkill = () => {
		if (skillsInput !== "") {
			setSkills([...skills, { name: skillsInput }]);
			setSkillsInput("");
		}
	};

	const addProfile = () => {
		if (profilesInput !== "") {
			setProfiles([...profiles, { name: profilesInput }]);
			setProfilesInput("");
		}
	};

	const deleteSkillOfList = (id) => {
		setDeleteSkillsList([...deleteSkillsList, { id: id }]);
	};

	const deleteProfileOfList = (id) => {
		setDeleteProfilesList([...deleteProfilesList, { id: id }]);
	};

	const deleteOldProfile = (id) => {
		const newProfiles = profilesOldList.filter((profile) => profile.id !== id);
		setProfilesOldList(newProfiles);
	};

	const deleteOldSkill = (id) => {
		const newSkills = skillsOldList.filter((skill) => skill.id !== id);
		setSkillsOldList(newSkills);
	};

	const deleteSkill = (index) => {
		const newSkills = skills.filter((skill, i) => i !== index);
		setSkills(newSkills);
	};

	const deleteProfile = (index) => {
		const newProfiles = profiles.filter((profile, i) => i !== index);
		setProfiles(newProfiles);
	};

	const updateData = async (id, { callback, setSelected }) => {
		let dataToUpdate = { info: {} };
		if (name) dataToUpdate.info.name = name;
		if (title) dataToUpdate.info.career = title.toUpperCase();
		if (path) dataToUpdate.info.path = path.toLowerCase();
		if (profile) dataToUpdate.info.profile = profile;
		if (icon) dataToUpdate.info.icon = icon;
		if (color) dataToUpdate.info.color = color;
		if (pensumURL) dataToUpdate.info.pensumURL = pensumURL;
		if (skills) dataToUpdate.Skills = skills;
		if (profiles) dataToUpdate.Profiles = profiles;
		if (setDeleteSkillsList) dataToUpdate.deleteSkillsList = deleteSkillsList;
		if (setDeleteProfilesList)
			dataToUpdate.deleteProfilesList = deleteProfilesList;
		await axios
			.patch(`/api/admin/careers/${id}`, dataToUpdate)
			.then((res) => {
				console.log(res);
				setSuccess("Se ha actualizado la carrera");
				setError("");
				callback();
				setSkills([]);

				setProfiles([]);
				setSelected("");
			})
			.catch((err) => {
				setSuccess("");
				err.response !== undefined &&
					setError("No se ha podido actualizar la carrera");
			});
	};

	const handleSubmit = () => {
		if (
			name !== "" &&
			title !== "" &&
			path !== "" &&
			profile !== "" &&
			icon !== "" &&
			color !== "" &&
			skills.length !== 0 &&
			profiles.length !== 0 &&
			pensumURL !== ""
		) {
			axios
				.post("/api/careers", {
					name,
					career: title.toUpperCase(),
					pensumURL,
					path: path.toLowerCase(),
					profile,
					Skills: skills,
					Profiles: profiles,
					icon,
					color,
				})
				.then(() => {
					setSuccess("Se ha agregado correctamente");
					setError("");
					setName("");
					setTitle("");
					setPath("");
					setProfile("");
					setSkills([]);
					setProfiles([]);
					setSkillsInput("");
					setProfilesInput("");
					setPensumURL("");
					setIcon("");
					setColor("");
				})
				.catch((err) => {
					setSuccess("");
					setError(err.response.data.message);
				});
		} else {
			setError("Todos los campos son obligatorios");
			setSuccess("");
		}
	};

	return {
		handleSkills,
		handleProfiles,
		handleProfile,
		handleTitle,
		handleName,
		handleSubmit,
		handlePath,
		handlePensumURL,
		updateData,
		addSkill,
		addProfile,
		deleteSkill,
		deleteSkillOfList,
		deleteProfileOfList,
		deleteProfile,
		pensumURL,
		name,
		skills,
		skillsOldList,
		deleteOldSkill,
		profiles,
		profilesOldList,
		deleteOldProfile,
		title,
		skillsInput,
		profilesInput,
		color,
		icon,
		path,
		setProfiles,
		setIcon,
		setSkillsOldList,
		setProfilesOldList,
		setColor,
		success,
		error,
	};
};

export default useCareers;
