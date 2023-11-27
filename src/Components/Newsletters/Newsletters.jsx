import React, { useState } from "react";
import styles from "./Newsletters.module.css";

const Newsletters = () => {
	const [formFields, setFormFields] = useState({
		name: "",
		email: "",
	});

	const _handleChange = (name, event) => {
		let value = event.target.value;
		setFormFields((prevFormFields) => ({
			...prevFormFields,
			[name]: value,
		}));
	};

	const _handleClick = () => {
		if (!name || !email) {
			alert("Please fill in all the required fields");
			return;
		} else {
			const newFormFields = { ...formFields };
			Object.keys(newFormFields).forEach((key) => (newFormFields[key] = ""));
			setFormFields(newFormFields);
		}
	};

	const { name, email } = formFields;
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>Subscribe Our Newsletter</h3>
				</div>
				<div className={styles.inputContainer}>
					<div className={styles.inputContainer1}>
						<input
							type="text"
							placeholder="Name:"
							className={styles.input1}
							value={name}
							onChange={(e) => {
								_handleChange("name", e);
							}}
						/>
					</div>
					<div className={styles.inputContainer2}>
						<input
							type="text"
							placeholder="Enter your Email"
							className={styles.input2}
							value={email}
							onChange={(e) => {
								_handleChange("email", e);
							}}
						/>
					</div>
					<div className={styles.btnContainer}>
						<button type="submit" onClick={_handleClick}>
							SEND
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newsletters;
