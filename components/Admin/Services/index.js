import styles from "../../../pages/admin/admin.module.css";
import useActive from "../../../hooks/useActive";
import Button from "../../Button";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useState} from "react";
import CreateService from "./CreateService";
import ShowServices from "./ShowServices";

const Services = () => {
	const {active, handleActiveChange} = useActive();
	const [mode, setMode] = useState(null);

	const handleModeChange = (state) => {
		handleActiveChange();
		setMode(state);
	};

	return (
		<div className={styles.option}>
			<header className={styles.headerOption}>
				<p>Services</p>
				<div className={styles.buttons}>
					{active ? (
						<>
							{mode ? (
								<Button
									eventClick={() => setMode(false)}
									color="black"
									title="Actualizar"
								/>
							) : (
								<Button
									eventClick={() => setMode(true)}
									color="green"
									title="Nuevo"
								/>
							)}
							<AiOutlineCloseCircle
								color="black"
								size="2rem"
								onClick={handleActiveChange}
							/>
						</>
					) : (
						<>
							<Button
								eventClick={() => handleModeChange(false)}
								color="black"
								title="Actualizar"
							/>
							<Button
								eventClick={() => handleModeChange(true)}
								color="green"
								title="Nuevo"
							/>
						</>
					)}
				</div>
			</header>
			<div className={active ? `${styles.bodyOption} ${styles.active}` : styles.bodyOption}>
				<div className={styles.formUpdate}>
					{mode ? <CreateService /> : <ShowServices />}
				</div>
			</div>
		</div>
	);
};

export default Services;
