import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import InputText from "../../../InputText";
import { useState } from "react";
import useCareers from "../../../../hooks/useCareers";
import Colors from "../../../Colors";
import Icons from "../../../Icons";
import Message from "../../../Message";
import Link from "next/link";

const ShowCareer = ({ data, callback }) => {
	const {
		skills,
		profiles,
		setSkillsOldList,
		setProfilesOldList,
		profilesInput,
		skillsInput,
		handleSkills,
		handleProfiles,
		handleName,
		name,
		handleTitle,
		title,
		handleProfile,
		profile,
		handlePath,
		path,
		handlePensumURL,
		pensumURL,
		addSkill,
		addProfile,
		deleteSkill,
		deleteOldSkill,
		deleteSkillOfList,
		deleteProfileOfList,
		skillsOldList,
		profilesOldList,
		deleteOldProfile,
		deleteProfile,
		error,
		success,
		icon,
		setIcon,
		color,
		setColor,
		updateData,
	} = useCareers();

	const [selected, setSelected] = useState("");
	return (
		<>
			{error !== "" && <Message message={error} />}
			{success !== "" && <Message message={success} type={"normal"} />}
			<div className={styles.table}>
				{data.map(
					(
						{
							name: nameStatic,
							id,
							career,
							Skills,
							Profiles,
							path : pathElement,
							color: colorElement,
							icon: iconElement,
						},
						key
					) => (
						<div key={key} className={styles.itemTable}>
							{selected !== id ? (
								<>
									<div key={key} className={styles.itemTableData}>
										<p>
											<span>Nombre:</span> {nameStatic}
										</p>
										<p>
											<span>Carrera: </span> {career}
										</p>
										<p>
											<span>Link: </span>
											<Link href={`/carreras/${pathElement}`}>
												<a>{`/carreras/${pathElement}`}</a>
											</Link>
										</p>
									</div>
									<div className={styles.itemTableButtons}>
										<Button
											color="orange"
											eventClick={() => {
												setSelected(id);
												setSkillsOldList(Skills);
												setProfilesOldList(Profiles);
												setColor(colorElement);
												setIcon(iconElement);
											}}
											title="Edit"
										/>
									</div>
								</>
							) : (
								<>
									<div
										key={key}
										className={`${styles.itemTableData} ${styles.itemSelected}`}
									>
										<p className={styles.messageEdit}>
											Si no deseas actualizar algun campo{" "}
											<span>Dejalo vacío</span>
										</p>
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
												(Este es el titulo que obtendran los egresados del
												instituto)
											</span>
										</div>
										<div className={styles.input}>
											<Colors color={color} callback={setColor} />
											<span>(Este color representara la carrera)</span>
										</div>
										<div className={styles.input}>
											<Icons icon={icon} callback={setIcon} />
											<span>(Este icono representara la carrera)</span>
										</div>
										<div className={styles.input}>
											<InputText
												placeholder="Ruta URL"
												type="text"
												onChange={handlePath}
												value={path}
											/>
											<span>
												(Esta sera la ruta posterior a carreras/[ruta url]
												ejemplo: carreras/informatica), no agregar "/"
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
												Este se mostrara debajo del titulo de la carrera, debe
												ser un URL para dirijir a el pensum
											</span>
										</div>
										<div className={styles.input}>
											<InputText
												type="textarea"
												placeholder="Perfil del egresado"
												onChange={handleProfile}
												value={profile}
											/>
											<span>
												(Esta contraseña será usada para iniciar sesión)
											</span>
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
													(Esta lista aparecera debajo de el perfil del
													egresado) debe darle click a "+" por cada perfil que
													agregue
												</span>
											</div>
											<Button eventClick={addProfile} title="+" color="green" />
										</div>
										{profilesOldList.map((el, key) => (
											<div key={key} className={styles.lineInput}>
												<span>{el.name}</span>
												<Button
													title="-"
													eventClick={() => {
														deleteOldProfile(el.id);
														deleteProfileOfList(el.id);
													}}
													color="red"
												/>
											</div>
										))}
										{profiles.map((el, key) => (
											<div key={key} className={styles.lineInput}>
												<span>{el.name}</span>
												<Button
													title="-"
													eventClick={() => {
														deleteProfile(key);
													}}
													color="red"
												/>
											</div>
										))}
										<div className={styles.lineInput}>
											<div className={styles.input}>
												<InputText
													type="text"
													placeholder="Habilidades"
													onChange={handleSkills}
													value={skillsInput}
												/>
												<span>
													(Estos son las habilidades que poseerá los egresados
													del instituto.) debe darle click a "+" por cada perfil
													que agregue
												</span>
											</div>
											<Button title="+" color="green" eventClick={addSkill} />
										</div>
										{skillsOldList.map((el, key) => (
											<div key={key} className={styles.lineInput}>
												<span>{el.name}</span>
												<Button
													title="-"
													color="red"
													eventClick={() => {
														deleteOldSkill(el.id);
														deleteSkillOfList(el.id);
													}}
												/>
											</div>
										))}
										{skills.map((el, key) => (
											<div key={key} className={styles.lineInput}>
												<span>{el.name}</span>
												<Button
													title="-"
													color="red"
													eventClick={() => {
														deleteSkill(key);
													}}
												/>
											</div>
										))}
									</div>
									<div className={styles.itemTableButtons}>
										<Button
											color="red"
											title="Cancel"
											eventClick={() => setSelected("")}
										/>
										<Button
											color="green"
											title="Guardar"
											eventClick={() => {
												updateData(id, {
													callback: callback,
													setSelected: setSelected,
												});
											}}
										/>
									</div>
								</>
							)}
						</div>
					)
				)}
			</div>
		</>
	);
};

export default ShowCareer;
