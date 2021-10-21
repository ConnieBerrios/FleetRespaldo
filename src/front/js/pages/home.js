import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { TeamMembers } from "../component/about-us";
import { Contacts } from "../component/contacts";
import { FrequentlyAsked } from "../component/frequently-asked";
import alondra from "../../img/alondra.jpeg";
import renato from "../../img/renato.jpeg";
import leon from "../../img/leon.jpeg";
import rigo from "../../img/rigo-baby.jpg";
import connie from "../../img/connie.jpeg";

import seba from "../../img/seba.jpeg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<FrequentlyAsked />
			<Contacts />

			<h2 className="text-center text-secondary m-5">Quienes Somos</h2>
			<div className="container">
				<div className="row d-flex justify-content-around ">
					<TeamMembers name=" Constanza" imagen={connie} />
					<TeamMembers name=" Leon" imagen={leon} />
					<TeamMembers name=" Alondra" imagen={alondra} />
					<TeamMembers name=" Sebastian" imagen={seba} />
					<TeamMembers name=" Renato" imagen={renato} />
				</div>
			</div>
		</div>
	);
};
