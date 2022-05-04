import styles from "../../../pages/admin/admin.module.css";
import Button from "../../Button";
import { useState } from "react";
import CreateCareer from "./CreateCareer";
import ShowCareers from "./ShowCareer";
import axios from "axios";

const Careers = ({ data }) => {
	const [show, setShow] = useState(false);
	const [newData, setNewData] = useState(data);

	const updateData = () => {
		axios
			.get("/api/admin/careers")
			.then((res) => {
				setNewData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<header className={styles.headerBody}>
				<h2>Carreras</h2>
				<span>
					(Creación y administración de las carreras disponibles en el IUJO.
				</span>
			</header>
			<h4 className={styles.subtitle}>Crear Carrera</h4>
			<span>Estas carreras se mostraran en la ruta /carreras.</span>
			{show ? (
				<div className={styles.boxBody}>
					<Button color="red" title="-" eventClick={() => setShow(false)} />
					<CreateCareer />
				</div>
			) : (
				<div className={styles.boxBody}>
					<Button color="green" title="+" eventClick={() => setShow(true)} />
				</div>
			)}
			<h4 className={styles.subtitle}>Administrar Carreras</h4>
			<span>
				Puedes administrar los datos asi como el titulo, la descripcion, el
				pensum , las habilidades y el perfil del egresado de la carrera.
			</span>
			<ShowCareers data={newData} callback={updateData} />
		</>
	);
};

export default Careers;
