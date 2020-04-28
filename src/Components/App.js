// e todos componentes eu tenho que importar o react para dentro
import React from 'react';

import PlacarContainer from "./PlacarContainer"

//todos meus componentes extends do react
//dentro do react eu tenho um objeto que se chama Componet{}
//essa biblioteca exige que ela tenha um metodo chamado render para saber oque ele vai renderizar quando chamar o componente
//tada vez que eu importa um componente eu tenho que export passando com default

const dados = {
	partida: {
		estadio: "Maracanã/RJ",
		data: "01/06/2016",
		horario: "19",
	},
	casa: {
		nome:"Vasco",
	},
	visitante: {
		nome: "Flamengo",
	},
	pessoa:{
		nome: "Guilherme",
	}
};




export default class App extends React.Component{
	render() {
	//aqui ele ai retorna o JSX que ele vai rendereizar
		return	<PlacarContainer {...dados} />;

	}
}


