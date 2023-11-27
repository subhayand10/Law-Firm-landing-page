import React from "react";
import styles from "./ChooseUs.module.css";
import ChooseUsContainer from "./ChooseUsContainer";
import giftImage from "../Assets/Gift 1.svg";

const data = [
	{
		id: 1,
		image: giftImage,
		successRate: "98% Success Rate",
		description:
			"Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
		btnText: "Read More",
	},
	{
		id: 2,
		image: giftImage,
		successRate: "100% Success Rate",
		description:
			"Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
		btnText: "Read More",
	},
	{
		id: 3,
		image: giftImage,
		successRate: "100% Success Rate",
		description:
			"Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
		btnText: "Read More",
	},
];

const ChooseUs = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>Why Choose us?</h3>
				</div>
				<div className={styles.boxWrapper}>
					{data.map((each) => (
						<ChooseUsContainer data={each} key={each.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default ChooseUs;
