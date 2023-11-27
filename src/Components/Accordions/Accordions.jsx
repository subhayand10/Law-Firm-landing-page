import React, { useState } from "react";
import styles from "./Accordions.module.css";

const Accordions = ({ data }) => {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const _toggle = (index) => {
		setExpandedIndex((prev) => (prev === index ? null : index));
	};

	return (
		<>
			{data?.length
				? data.map((each, index) => (
						<div key={each.id}>
							<div className={styles.accordionHeading}>
								<h3>{each.question}</h3>
								<div className={styles.accordionIconWrapper}>
									<p onClick={() => _toggle(index)}>
										{expandedIndex === index ? "➖" : "➕"}
									</p>
								</div>
							</div>

							{expandedIndex === index ? (
								<div className={styles.accordionAnswer}>
									<p>{each.answer}</p>
								</div>
							) : (
								<></>
							)}
						</div>
				  ))
				: null}
		</>
	);
};

export default Accordions;
