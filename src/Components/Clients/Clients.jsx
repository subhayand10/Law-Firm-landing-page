import React from "react";
import styles from "./Clients.module.css";
import { ReactComponent as LeftArrow } from "../Assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../Assets/rightArrow.svg";
import ClientBox from "./ClientBox";
import client1 from "../Assets/client1.svg";
import client2 from "../Assets/client2.svg";
import client3 from "../Assets/client3.svg";

const data = [
	{
		id: 1,
		image: client1,
		name: "Jane Cooper",
		designation: "Ceo of Hunt",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
	},
	{
		id: 2,
		image: client2,
		name: "Devon Lane",
		designation: "Ceo of Hunt",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
	},
	{
		id: 3,
		image: client3,
		name: "Robert Fox",
		designation: "Ceo of Hunt",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
	},
];

const Clients = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>What says our happy Clients</h3>
					<div className={styles.btnContainer}>
						<button className={styles.leftArrowBtn}>
							<LeftArrow />
						</button>
						<button className={styles.rightArrowBtn}>
							<RightArrow />
						</button>
					</div>
				</div>
				<div className={styles.clientWrapper}>
					{data.map((each) => (
						<ClientBox data={each} key={each.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Clients;
