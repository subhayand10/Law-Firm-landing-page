import React from "react";
import styles from "./Team.module.css";
import member1 from "../Assets/Member1.svg";
import member2 from "../Assets/Member2.svg";
import member3 from "../Assets/Member3.svg";
import member4 from "../Assets/Member4.svg";
import member5 from "../Assets/Member5.svg";
import member6 from "../Assets/Member6.svg";
import { Box, Grid } from "@mui/material";

const data = [
	{
		id: 1,
		image: member1,
		name: "Danial Def",
		cases: 301,
	},
	{
		id: 2,
		image: member2,
		name: "Sanfole",
		cases: 850,
	},
	{
		id: 3,
		image: member3,
		name: "Cesforila",
		cases: 470,
	},
	{
		id: 4,
		image: member4,
		name: "Colleen",
		cases: 180,
	},
	{
		id: 5,
		image: member5,
		name: "Haldone",
		cases: 212,
	},
	{
		id: 6,
		image: member6,
		name: "Nik Jeo",
		cases: 350,
	},
];

const Team = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.teamHeader}>
					<h3>Our Team</h3>
				</div>

				<div className={styles.teamContainer}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}>
							{data.map((each, index) => (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<div className={styles.grid}>
										<div className={styles.imgContainer}>
											<img src={each.image} alt="team-Member" />
										</div>
										<div className={styles.textWrapper}>
											<h5>{each.name}</h5>
											<p>{each.cases} Cases</p>
										</div>
									</div>
								</Grid>
							))}
						</Grid>
					</Box>
				</div>
			</div>
		</>
	);
};

export default Team;
