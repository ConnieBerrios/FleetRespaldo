import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SignupSeller } from "../component/signupSeller";
import { SignupTransport } from "../component/signupTransport";
import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	const registrarSeller = () => {
		actions.registroUserSeller();
	};

	const registrarTransport = () => {
		actions.registroUserTransport();
	};

	return (
		<>
			<div className="signinBox">
				<h1 style={{ color: "white" }}>Selecciona tu Perfil</h1>
				<button className="btn" onClick={registrarSeller} style={{ color: "white" }}>
					Vendedor
				</button>
				<button className="btn" onClick={registrarTransport} style={{ color: "white" }}>
					Transportista
				</button>
				<div>{store.registro ? <SignupSeller /> : <SignupTransport />}</div>
			</div>

			{/* <div className="signinBox">
				<form onSubmit={e => handlersubmit(e)}>
					<h1>Registro de Cuenta</h1>
					<select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="transport" onClick={e => setTransport(e.target.value)}>
								Transportista
							</option>
							<option value="seller" onClick={e => setLastName(e.target.value)}>
								Vendedor
							</option>
						</select>
					<input
						type="text"
						className="form-control"
						// value={name}
						placeholder="Nombre"
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={lastName}
						name="lastName"
						placeholder="Apellido"
						onChange={e => setLastName(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={rut}
						name="rut"
						placeholder="RUT"
						onChange={e => setRut(e.target.value)}
					/>
					<input
						type="email"
						className="form-control"
						// value={email}
						name="email"
						placeholder="E-mail"
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type="text"
						className="form-control"
						// value={phone}
						name="phone"
						placeholder="Tel??fono"
						onChange={e => setPhone(parseInt(e.target.value))}
					/>
					<input
						type="text"
						className="form-control"
						// value={initialAddress}
						name="initialAddress"
						placeholder="Direcci??n"
						onChange={e => setInitialAddress(e.target.value)}
					/>
					<input
						type="password"
						className="form-control"
						// value={password}
						name="password"
						placeholder="Contrase??a"
						onChange={e => setPassword(e.target.value)}
					/>
					<br />
					<input type="submit" name="ingresar" value="Registrarse" onSubmit={e => handlersubmit(e)} /> */}
			{/* <Link to="/login">
						<button
							type="submit"
							style={{ backgroundColor: "transparent" }}
							className="btn btn-primary"
							// value={register}
							name="register">
							Iniciar Sesi??n
						</button>
					</Link> */}
			{/* </form>
				<form action="login.html" method="POST" />
			</div> */}
			{/* <SignupSeller /> */}
		</>
	);
};
