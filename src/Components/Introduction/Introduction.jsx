import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.introHeading}>
					<h2>Let’s Introduce Ourself</h2>
				</div>
				<div className={styles.vl}></div>
				<div className={styles.introType}>
					<h3>Criminal Lawyer</h3>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequatduis enim velit mollit Exercitation.
					</p>
				</div>
			</div>
		</>
	);
};

export default Introduction;
