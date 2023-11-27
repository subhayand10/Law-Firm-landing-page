import React from "react";
import styles from "./AreaOfPractices.module.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";

const AreaOfPractices = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>Area of Practices</h3>
				</div>
				<Box className={styles.gridContainer}>
					<Grid container spacing={2} className={styles.gridWrapper}>
						<Grid item xs={6} md={8} className={styles.grid}>
							<img src={image1} alt="grid-pic" />
							<p className={styles.largeImage}>BUSINESS LAW</p>
						</Grid>

						<Grid item xs={6} md={4} className={styles.grid}>
							<img src={image2} alt="grid-pic" />
							<p className={styles.smallImage}>Partnership LAW</p>
						</Grid>

						<Grid item xs={6} md={4} className={styles.grid}>
							<img src={image3} alt="grid-pic" />
							<p className={styles.smallImage}>REAL ESTATE LAW</p>
						</Grid>

						<Grid item xs={6} md={8} className={styles.grid}>
							<img src={image4} alt="grid-pic" />
							<p className={styles.largeImage}>BUSINESS LAW</p>
						</Grid>

						<Grid item xs={6} md={8} className={styles.grid}>
							<img src={image5} alt="grid-pic" />
							<p className={styles.largeImage}>LANDLORD DISPUTES</p>
						</Grid>

						<Grid item xs={6} md={4} className={styles.grid}>
							<img src={image6} alt="grid-pic" />
							<p className={styles.smallImage}>ELDER ABUSE</p>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	);
};

export default AreaOfPractices;
