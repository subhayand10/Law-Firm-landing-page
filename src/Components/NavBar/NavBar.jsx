import React from "react";
import Button from "../Buttons/Button";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";

const listItem = ["Home", "Attroneys", "Practice Areas", "About Us"];

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.listItemWrapper}>
				<ul>
					{listItem.map((each, index) => (
						<li key={index}>{each}</li>
					))}
				</ul>
			</div>
			<div className={styles.btnContainer}>Contact Now</div>
		</div>
	);
};

export default NavBar;
