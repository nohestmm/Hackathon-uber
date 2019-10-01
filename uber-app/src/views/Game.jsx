import React from 'react';
import Wheel from '../components/Wheel'
class Game extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            totalPoints: 0,
            dataWheel: 0,
            animatedWheel: false,
        }
        this.wheelData = 0;
        this.pointsWheel = 0;
        this.spinWheel = this.spinWheel.bind(this)
        this.stopWheel = this.stopWheel.bind(this)
        this.wheelRef = React.createRef();

    }
    spinWheel() {
        let wheelTemp = this.wheelData;
        const gradeSpin = 360;
        let prize = gradeSpin / 8;
        let temporalValue = Math.floor(Math.random()*8);
        let resultWheel = temporalValue * prize;
        let valuePrize = (gradeSpin * 4) + resultWheel;

        this.setState({
			dataWheel: wheelTemp * prize,
			animatedWheel: true,
		})
        setTimeout(() => {
			this.wheelRef.current.classList.add('img-ruleta');
			this.setState({
				dataWheel: valuePrize,
			})
		}, 200);
    }

    stopWheel(){
		
		this.wheelRef.current.classList.remove("img-ruleta");

	// 	if (this.pointsWheel >= 0) {
			
	this.setState({
	
	animatedWheel: false,
	})

	// 	}
	// 	else{

	// 		this.setState({
	// 			animatedWheel: true,
	// 		})

	}

	// 	if(this.points_data === -1){
	// 		alert("Felicidades", "Ha ganado un premio!!!", "success");
	// 	}
	// 	else if(this.points_data > 0) {
	// 		alert("Ganó", "Ha ganado " + this.points_data + " puntos", "success");
	// 	}
	// 	else {
	// 		alert("Perdiste", "Inténtelo nuevamente... :( ", "warning");
	// 	}

	// }

    render() {
        return (
            <Wheel 
            animatedWheel={this.state.animatedWheel}
            spinWheel = {this.spinWheel}
            wheelRef = {this.wheelRef}
            dataWheel = {this.state.dataWheel}
            stopWheel = {this.stopWheel}/>
            
        )
    }
}
export default Game;