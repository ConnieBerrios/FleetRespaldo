const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			session: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			solicitud: [],
			seller: [],
			detailseller: [],

			vendedores: [
				{
					name: "John Doe",
					address: "Parque Arauco",
					lat: -33.4022,
					lng: -70.5782,
					zone: "Norte"
				},
				{
					name: "Juan Pablo",
					address: "Parque Bicentinario",
					lat: -33.3986,
					lng: -70.6025,
					zone: "Centro"
				},
				{
					name: "Cabeza Papa",
					address: "Parque Forestal",
					lat: -33.4357,
					lng: -70.6413,
					zone: "Sur"
				},
				{
					name: "Karina Rubio",
					address: "Costanera Center",
					lat: -33.418,
					lng: -70.6064,
					zone: "Norte"
				}
			],
			puntosDeEntrega: [
				{
					name: "Raul Perez",
					address: "Portal La Reina",
					lat: -33.428,
					lng: -70.541,
					zone: "Norte"
				},
				{
					name: "Paula Daza",
					address: "La Moneda",
					lat: -33.4429,
					lng: -70.6539,
					zone: "Centro"
				},
				{
					name: "Camila Soto",
					address: "Estacion Central",
					lat: -33.4619,
					lng: -70.6985,
					zone: "Centro"
				}
			]
		},

		/*allVendedores: [],
		geocodedVendedores: [],*/

		//Vendedores desde api, direccion sin geocode
		allVendedores: [],
		//Url en formato google para traer lat: lng: de google api
		geocodedVendedores_url: [],
		// Lat: lng: de cada usario para pintar markers en map
		vendedoresLatLng: [],
		//probando lat lng
		test: [],

		//generar pedido desde componente ORDER
		order: [],


		actions: {
			//FUNCION PARA MANTENER TOKEN OPERATIVO
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("aplication just loaded");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			//login con metodo POST para vendedores
			login: async (mail, password) => {
				console.log("mail", mail);
				console.log("password", password);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(
						"https://3001-maroon-wombat-a7zqfr8t.ws-us18.gitpod.io/api/perfilVendedor",
						requestOptions
					);
					if (response.status !== 200) {
						alert("There has been an error");
						return false;
					}

					const data = await response.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.token);
					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("there was en error", error);
				}
			},

			//LOGIN PARA TRANSPORTISTAS
			login2: async (mail, password) => {
				console.log("mail", mail);
				console.log("password", password);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(
						"https://3001-maroon-wombat-a7zqfr8t.ws-us18.gitpod.io/api/perfilTransportista",
						requestOptions
					);
					if (response.status !== 200) {
						alert("There has been an error");
						return false;
					}

					const data = await response.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.token);
					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("there was en error", error);
				}
			},
			//LOG OUT PARA AMBOS (SE LLAMA EN NAVBARSELL)
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("login out"), setStore({ token: null });
			},
			//funciones para el boleano de los inicios de sesion
			iniciarsessionvendedor: () => {
				setStore({ session: true });
			},

			iniciarsessiontransportista: () => {
				setStore({ session: false });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			/*getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},*/

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },

			getMessage: message => {
				const store = getStore();
				setStore({ solicitud: [...store.solicitud, message] });
			},

			//Funcion llamar usuarios, (API FAKE)
			/*loadSeller: () => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users")
					.then(response => response.json())
					.then(result => {
						setStore({ seller: result });
						//console.log(store.seller);
					})
					.catch(error => console.log("error", error));
			},*/

			//Funcion llamar detalle de usuarios (API FAKE)
			/*loadDetailseller: id => {
				const store = getStore();
				fetch("https://jsonplaceholder.typicode.com/users/" + id)
					.then(response => response.json())
					.then(result => {
						setStore({ detailseller: result });
						//console.log("ddetailseller", store.detailseller);
					})
					.catch(error => console.log("error", error));
			},*/

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Traer todos Vendedores desde nuestro api
			loadAllVendedores: () => {
				const store = getStore();
				fetch("https://3001-green-reptile-8ag6a3rx.ws-us18.gitpod.io/api/perfilVendedor")
					.then(response => response.json())
					.then(result => {
						setStore({ allVendedores: result });
						console.log("*** allVendedores ***", store.allVendedores);
					})
					.catch(error => console.log("error", error));
			},

			//funcion para convertir direccciones a LAT LNG
			addressToLatLong: () => {
				const store = getStore();
				let url = "https://maps.googleapis.com/maps/api/geocode/json?";
				let country = "&components=country:CL";
				let googleKey = "&key=AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0";
				//CONCATENATE URL + ADDRESS + APIkey  TO DO GEOCODING
				let address;
				for (address = 0; address < store.allVendedores.length; address++) {
					console.log("ALL VENDEDORES DIRECCIONES: " + store.allVendedores[address].initialAddress);
					// Remove , and " "
					let initialString = store.allVendedores[address].initialAddress.replace(/ /g, "+");
					let concatString = initialString.replace(/,/g, "");
					//console.log(concatString);
					// Concatenate
					let geoCoded = url + concatString + country + googleKey;
					//console.log("geoCoded url:" + geoCoded);
					// Save in store
					setStore({ geocodedVendedores_url: geoCoded });
					console.log(store.geocodedVendedores_url);
				}
			},

			fetchUrlVendedores: () => {
				const store = getStore();
				fetch(store.geocodedVendedores_url)
					.then(response => response.json())
					.then(result => {
						setStore({ vendedoresLatLng: result.results[0].geometry.location });
						setStore({ test: [result.results[0].geometry.location] });
					})
					.catch(error => console.log("error", error));
				console.log("Nombre: ", store.allVendedores[0].name);
				console.log("Fetch de geocode url para cada allVendedores array", store.allVendedores);
				console.log("test", store.allVendedores);
			},

			generateOrder: input => {
				const store = getStore();
				setStore({ order: input });
				console.log("STORE => Order message: ", store.order);
			}
		}
	};
};

export default getState;
