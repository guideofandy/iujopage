import { useState } from "react";
import Button from "../../../Button";
import InputText from "../../../InputText";
import styles from "../../../../pages/admin/admin.module.css";
import useServices from "../../../../hooks/useServices";

const ShowServices = ({ data }) => {
	const [selected, setSelected] = useState("");
	const {
		handleName,
		name,
		handlePath,
		path,
		handleEmail,
		email,
		handlePhone,
		phone,
		handleDescription,
		description,
		handleCoordinator,
		coordinator,
		handleImage,
		error,
		success,
	} = useServices();

	return (
		<div className={styles.table}>
			{data.map(
				(
					{
						name: nameElement,
						id,
						email: emailElement,
						path: pathElement,
						coordinator: coordinatorElement,
						description: descriptionElement,
					},
					key
				) => (
					<div key={key} className={styles.itemTable}>
						{selected !== id ? (
							<>
								<div key={key} className={styles.itemTableData}>
									<p>
										<span>Nombre:</span> {nameElement}
									</p>
									<p>
										<span>Correo: </span> {emailElement}
									</p>
									<p>
										<span>Coordinador:</span> {coordinatorElement}
									</p>
									<p>
										<span>Descripción:</span> {descriptionElement}
									</p>
									<p>
										<span>Ruta:</span> servicios/{pathElement}
									</p>
								</div>
								<div className={styles.itemTableButtons}>
									<Button
										color="orange"
										eventClick={() => setSelected(id)}
										title="Edit"
									/>
								</div>
							</>
						) : (
							<>
								{success !== "" && <Message type="normal" message={success} />}
								{error !== "" && <Message message={error} />}
								<div key={key} className={styles.itemTableData}>
									<p className={styles.messageEdit}>
										Si no deseas actualizar algun campo{" "}
										<span>Dejalo vacío</span>
									</p>
									<div className={styles.input}>
										<InputText
											value={name}
											onChange={handleName}
											placeholder={"Nombre del servicio"}
										/>
										<span>(Este será el nombre principal del servicio)</span>
									</div>
									<div className={styles.input}>
										<InputText
											placeholder={"Correo Electronico"}
											type="email"
											onChange={handleEmail}
											value={email}
										/>
										<span>
											(Este correo sera utilizado como contacto para el publico)
										</span>
									</div>
									<div className={styles.input}>
										<InputText
											placeholder={"Ruta URL"}
											onChange={handlePath}
											value={path}
										/>
										<span>
											(Esta es la ruta para ver el servicio. Ej: /servicios/Nombre-delServicio)
										</span>
									</div>
									<div className={styles.input}>
										<InputText
											placeholder={"Coordinador del servicio"}
											onChange={handleCoordinator}
											value={coordinator}
										/>
										<span>(Nombre del Coordinador del servicio)</span>
									</div>
									<div className={styles.input}>
										<InputText
											type="textarea"
											placeholder={"Descripción"}
											onChange={handleDescription}
											value={description}
										/>
										<span>(Descripción del servicio)</span>
									</div>
									<div className={styles.input}>
										<InputText
											placeholder={"Telefono"}
											onChange={handlePhone}
											value={phone}
										/>
										<span>
											(Este será publico para todo el publico como contacto)
										</span>
									</div>
									<div className={styles.input}>
										<input type="file" name="file" onChange={handleImage} />
										<span>
											(Esta imagen aparecera como portada del servicio)
										</span>
									</div>
								</div>
								<div className={styles.itemTableButtons}>
									<Button
										color="red"
										eventClick={() => setSelected("")}
										title="Cancel"
									/>
									<Button
										color="green"
										eventClick={() => setSelected("")}
										title="Guardar"
									/>
								</div>
							</>
						)}
					</div>
				)
			)}
		</div>
	);
};

export default ShowServices;
