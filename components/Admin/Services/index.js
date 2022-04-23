import styles from "../../../pages/admin/admin.module.css";
import Button from "../../Button";
import CreateService from "./CreateService";
import ShowServices from "./ShowServices";
import {useState} from "react";

const Services = ({data}) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<header className={styles.headerBody}>
				<h2>Servicios</h2>
				<span>
					(Creación y administración de los Servicios disponibles en el IUJO.
				</span>
			</header>
			<h4 className={styles.subtitle}>Crear Servicio</h4>
			<span>Estos Servicios se mostraran en la ruta /Servicios.</span>
			{show ? (
				<div className={styles.boxBody}>
					<Button color="red" title="-" eventClick={() => setShow(false)} />
					<CreateService />
				</div>
			) : (
				<div className={styles.boxBody}>
					<Button color="green" title="+" eventClick={() => setShow(true)} />
				</div>
			)}
			<h4 className={styles.subtitle}>Administrar Servicios</h4>
			<span>
				Puedes administrar los datos de los Servicios, como su nombre y contacto.
			</span>
			<ShowServices data={data} />
		</>
	);
};

export default Services;
