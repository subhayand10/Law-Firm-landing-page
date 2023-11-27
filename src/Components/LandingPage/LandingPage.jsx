import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingPage.module.css";
import HeroHeader from "../HeroHeader/HeroHeader";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import Clients from "../Clients/Clients";
import Team from "../Team/Team";
import Faq from "../Faq/Faq";
import Newsletters from "../Newsletters/Newsletters";
import Footer from "../Footer/Footer";

const LandingPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.landingPage1}>
				<NavBar />
				<HeroHeader />
			</div>
			<div className={styles.contentBackground}>
				<div className={styles.contentWrapper}>
					<Introduction />
					<ChooseUs />
					<AreaOfPractices />
					<Clients />
					<Team />
					<Faq />
					<Newsletters />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
