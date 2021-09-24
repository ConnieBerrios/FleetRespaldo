import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

/* Tamaño del mapa */
const containerStyle = {
	width: "70vw",
	height: "60vh"
};

/* Aqui centramos el mapa -- lat: -33.4369,
	lng: -70.6344 ES PARA PLAZA ITALIA */
const center = {
	lat: -33.4369,
	lng: -70.6344
};

export const Map = () => {
	const { store, actions } = useContext(Context);
	return (
		<LoadScript googleMapsApiKey="AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{/* Markers son los pins en el mapa */}
					<div>
						{store.vendedores.map((person, position) => {
							return (
								<Marker
									key={position}
									position={{ lat: person.lat, lng: person.lng }}
									data-toggle="modal"
									data-target="#exampleModal"
								/>
							);
						})}
					</div>
				</>
			</GoogleMap>
		</LoadScript>
	);
};

export const Maplist = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.vendedores.map((person, position) => {
				return (
					<div className="container mt-2 col-6 mx-auto" key={position}>
						<ul className="list-group">
							<li className="list-group-item">
								Nombre: <strong>{person.name}</strong>
								<p>
									Punto de Inicio:
									<strong>{person.address}</strong>
								</p>
								<p>
									Zona:
									<strong>{person.zone}</strong>
								</p>
								<h5>
									punto de retiro <span className="text-success">confirmado</span>
								</h5>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
