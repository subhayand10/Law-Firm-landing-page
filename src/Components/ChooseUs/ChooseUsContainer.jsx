import React from "react";
import styles from "./ChooseUsContainer.module.css";

const ChooseUsContainer = ({ data }) => {
	const { image, SuccessRate, description, btnText } = data;

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.imgWrapper}>
					<img src={image} alt="giftImage" />
				</div>

				<h5>{SuccessRate} Success Rate</h5>
				<p>{description}</p>

				<button className={styles.btnContainer}>{btnText}</button>
			</div>
		</>
	);
};

export default ChooseUsContainer;
