import React from "react";
import styles from "./ClientBox.module.css";

const ClientBox = ({ data }) => {
	const { image, name, designation, description } = data;
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer}>
					<img src={image} alt="client" />
				</div>

				<div className={styles.header}>
					<h4>{name}</h4>
					<p>{designation}</p>
				</div>

				<div className={styles.description}>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
};

export default ClientBox;
