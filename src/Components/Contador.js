import React from "react";


//aqui temos um componente chamado contador esse compodente renderiza o html de um numero h1 e dois botoes e aqui nesse componete tambem
//tambem fazermos o estado desse componente


export default class Contador extends React.Component {
	//toda vez que vc tem que subistitir o construdor do compodente padrao que e o React.Component nos utilizamos os super
	constructor(){
		super();
		this.state={
			contador: 0,
		}

	}

	decrementar(){
		this.setState({
			contador: this.state.contador -1,
		})
	}
	incrementar(){
		this.setState({
			contador: this.state.contador +1,
		})
	}
	render() {
		return (
			<div>
				<h1>{this.state.contador}</h1>
				<div>
					<button onClick={this.decrementar.bind(this)}>-</button>
					<button onClick={this.incrementar.bind(this)}>+</button>
				</div>
			</div>
			);
	}
}