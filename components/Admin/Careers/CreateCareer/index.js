import InputText from "../../../InputText";
import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import useCareers from "../../../../hooks/useCareers";
import Colors from "../../../Colors";
import Icons from "../../../Icons";
import Message from "../../../Message";

const CreateCareer = () => {
	const {
		handleName,
		name,
		handleTitle,
		title,
		handlePath,
		path,
		handleProfile,
		profile,
		handlePensumURL,
		pensumURL,
		handleSubmit,
		handleProfiles,
		handleSkills,
		profilesInput,
		skillsInput,
		deleteProfile,
		addProfile,
		addSkill,
		deleteSkill,
		skills,
		profiles,
		color,
		setColor,
		icon,
		setIcon,
		success,
		error,
	} = useCareers();

	return (
		<>
			{success !== "" && <Message type="normal" message={success} />}
			{error !== "" && <Message message={error} />}
			<div className={styles.input}>
				<InputText
					className={styles.inputForm}
					placeholder="Nombre de la carrera"
					onChange={handleName}
					value={name}
					type="text"
				/>
				<span>(Este nombre aparecera en las listas)</span>
			</div>
			<div className={styles.input}>
				<InputText
					className={styles.inputForm}
					placeholder="Título"
					onChange={handleTitle}
					value={title}
					type="text"
				/>
				<span>
					(Este es el titulo que obtendran los egresados del instituto)
				</span>
			</div>
			<div className={styles.input}>
				<Colors color={color} callback={setColor} />
				<span>(Este color sera el que aparecera en la lista de carreras)</span>
			</div>
			<div className={styles.input}>
				<Icons icon={icon} callback={setIcon} />
				<span>(Este icono sera el que aparecera en la lista de carreras)</span>
			</div>
			<div className={styles.input}>
				<InputText
					placeholder="Ruta URL"
					type="text"
					onChange={handlePath}
					value={path}
				/>
				<span>
					(Esta sera la ruta posterior a carreras/[ruta url] ejemplo:
					carreras/informatica), no agregar "/"
				</span>
			</div>
			<div className={styles.input}>
				<InputText
					placeholder={"Pensum URL"}
					type="text"
					onChange={handlePensumURL}
					value={pensumURL}
				/>
				<span>
					Este se mostrara debajo del titulo de la carrera, debe ser un URL para
					dirijir a el pensum
				</span>
			</div>
			<div className={styles.input}>
				<InputText
					type="textarea"
					placeholder="Perfil del egresado"
					onChange={handleProfile}
					value={profile}
				/>
				<span>(El perfil aparecera debajo de el titulo, debe expresar el perfil del proximo egresado del iujo)</span>
			</div>
			<div className={styles.lineInput}>
				<div className={styles.input}>
					<InputText
						type="text"
						placeholder="Perfiles del egresado"
						onChange={handleProfiles}
						value={profilesInput}
					/>
					<span>
						(Esta lista aparecera debajo de el perfil del egresado) debe darle
						click a "+" por cada perfil que agregue
					</span>
				</div>
				<Button
					title="+"
					color="green"
					eventClick={(e) => {
						addProfile(e);
						handleProfiles({ target: { value: "" } });
					}}
				/>
			</div>
			{profiles.map((el, key) => (
				<div key={key} className={styles.lineInput}>
					<span>{el.name}</span>
					<Button title="-" color="red" eventClick={() => deleteProfile(key)} />
				</div>
			))}
			<div className={styles.lineInput}>
				<div className={styles.input}>
					<InputText
						type="text"
						onChange={handleSkills}
						placeholder="Habilidades"
						value={skillsInput}
					/>
					<span>
						(Estos son las habilidades que poseerá los egresados del instituto.)
						debe darle click a "+" por cada perfil que agregue
					</span>
				</div>
				<Button
					title="+"
					color="green"
					eventClick={(e) => {
						addSkill(e);
						handleSkills({ target: { value: "" } });
					}}
				/>
			</div>
			{skills.map((el, key) => (
				<div key={key} className={styles.lineInput}>
					<span>{el.name}</span>
					<Button title="-" eventClick={() => deleteSkill(key)} color="red" />
				</div>
			))}
			<div className={styles.input}>
				<Button
					color="black"
					title="Registrar Carrera"
					eventClick={handleSubmit}
				/>
			</div>
		</>
	);
};

export default CreateCareer;
