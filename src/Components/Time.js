import  React from "react";

import BotaoGol from "./BotaoGol" ;

export default class Time extends React.Component{
	render(){	

		const time = this.props
		return(

			<div>
				<h1>{this.props.nome} </h1>
				<h2>{time.gols} </h2>
				<BotaoGol marcarGol={this.props.marcarGol} />
			</div>
		);
	}
}