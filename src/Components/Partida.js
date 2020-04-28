import  React from "react";




export default class Partida extends React.Component{
	render(){
		const partida = this.props
		return(

			<div>
				<h2>{this.props.estadio}</h2>
				<div>
					<span>{partida.data}</span>
					<span>-</span>
					<span>{partida.horario}</span>
				</div>
				
			</div>
		);
	}
}