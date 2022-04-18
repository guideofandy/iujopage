import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import InputText from "../../../InputText";
import {useState} from "react";

const ShowCareer = ({data}) => {
	const [selected, setSelected] = useState("");
	return (
		<div className={styles.table}>
			{data.map(({name, id, color, Skills, Profiles}, key) => (
				<div key={key} className={styles.itemTable}>
					{selected !== id ? (
						<>
							<div key={key} className={styles.itemTableData}>
								<p>
									<span>Nombre:</span> {name}
								</p>
								<p>
									<span>Color: </span> {color}
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
							<div key={key} className={`${styles.itemTableData} ${styles.itemSelected}`}>
								<p className={styles.messageEdit}>
									Si no deseas actualizar algun campo <span>Dejalo vacío</span>
								</p>
								<p>
									<InputText placeholder={name} />
								</p>
								<div className={styles.lineInput}>
									<div className={styles.input}>
										<InputText
											type="text"
											placeholder="Perfiles del egresado"
										/>
										<span>
											(Esta lista aparecera debajo de el perfil del egresado) debe
											darle click a "+" por cada perfil que agregue
										</span>
									</div>
									<Button title="+" color="green" />
								</div>
								{Profiles.map((el, key) => (
									<div key={key} className={styles.lineInput}>
										<span>{el.name}</span>
										<Button
											title="-"
											color="red"
										/>
									</div>
								))}
								<div className={styles.lineInput}>
									<div className={styles.input}>
										<InputText
											type="text"
											placeholder="Habilidades"
										/>
										<span>
											(Estos son las habilidades que poseerá los egresados del
											instituto.) debe darle click a "+" por cada perfil que
											agregue
										</span>
									</div>
									<Button title="+" color="green" />
								</div>
								{Skills.map((el, key) => (
									<div key={key} className={styles.lineInput}>
										<span>{el.name}</span>
										<Button
											title="-"
											color="red"
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
									eventClick={() => setSelected("")}
								/>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default ShowCareer;
