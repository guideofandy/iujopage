import {useState} from "react";
import Button from "../../../Button";
import InputText from "../../../InputText";
import styles from "../../../../pages/admin/admin.module.css";

const ShowServices = ({data}) => {
	const [selected, setSelected] = useState("");

	return (
		<div className={styles.table}>
			{data.map(({name, id, email, path, coordinator, description}, key) => (
				<div key={key} className={styles.itemTable}>
					{selected !== id ? (
						<>
							<div key={key} className={styles.itemTableData}>
								<p>
									<span>Nombre:</span> {name}
								</p>
								<p>
									<span>Correo: </span> {email}
								</p>
								<p>
									<span>Coordinador:</span> {coordinator}
								</p>
								<p>
									<span>Descripción:</span> {description}
								</p>
								<p>
									<span>Ruta:</span> servicios/{path}
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
							<div key={key} className={styles.itemTableData}>
								<p className={styles.messageEdit}>
									Si no deseas actualizar algun campo <span>Dejalo vacío</span>
								</p>
								<div className={styles.input}>
									<InputText placeholder={name} />
									<span>(Este será el nombre principal del servicio)</span>
								</div>
								<div className={styles.input}>
									<InputText placeholder={email} />
									<span>
										(Este correo sera utilizado como contacto para el publico)
									</span>
								</div>
								<div className={styles.input}>
									<InputText placeholder={path} />
									<span>
										(Esta es la ruta para ver el servicio. Ej: /servicios/upp)
									</span>
								</div>
								<div className={styles.input}>
									<InputText placeholder={coordinator} />
									<span>(Nombre del Coordinador del servicio)</span>
								</div>
								<div className={styles.input}>
									<InputText placeholder={description} />
									<span>(Descripción del servicio)</span>
								</div>
								<div className={styles.input}>
									<input type="file" />
									<span>(Esta imagen aparecera como portada del servicio)</span>
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
			))}
		</div>
	);
};

export default ShowServices;
