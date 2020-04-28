import React from 'react'; //importando o react dentro do meu arquivo
import ReactDOM from 'react-dom'; // importando reactDOM pra dentro do arquivo

import App from "./components/App"; // importando meu App que e o meu componente
//render e um metodo do react-dom que recebe dois paramentros que e a tag que ele vai rendereizar o o elemento onde ele vai rendereizar
ReactDOM.render(
	<App />,
	document.getElementById("app")
);