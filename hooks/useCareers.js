import {useState} from "react";

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


	const handleSkills = ({target}) => {
		setSkillsInput(target.value);
	};

	const handleProfiles = ({target}) => {
		setProfilesInput(target.value);
	};

	const addSkill = () => {
		skillsInput !== "" && setSkills([...skills, {name: skillsInput}]);
	};

	const addProfile = () => {
		profilesInput !== "" && setProfiles([...profiles, {name: profilesInput}]);
	};

	const deleteSkill = (index) => {
		const newSkills = skills.filter((skill, i) => i !== index);
		setSkills(newSkills);
	};

	const deleteProfile = (index) => {
		const newProfiles = profiles.filter((profile, i) => i !== index);
		setProfiles(newProfiles);
	};

	return {
		handleSkills,
		handleProfiles,
		addSkill,
		addProfile,
		deleteSkill,
		deleteProfile,
		name,
		setName,
		skills,
		setSkills,
		profiles,
		setProfiles,
		skillsInput,
		profilesInput,
		error,
		success,
		color,
		setColor,
		icon,
		setIcon,
	};
};

export default useCareers;
