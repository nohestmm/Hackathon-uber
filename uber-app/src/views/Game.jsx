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
        this.unlockSpin = this.unlockSpin.bind(this);
    }
    spinWheel() {
        let wheelTemp = this.wheelData;
        console.log("valor temporal", wheelTemp)
        const gradeSpin = 360;
        console.log("grado", gradeSpin)
        let prize = gradeSpin / 8;
        console.log("prize", prize)
        let temporalValue = Math.floor(Math.random() * 8);
        console.log("math", temporalValue)
        let resultWheel = temporalValue * prize;
        console.log("resultado", resultWheel)
        let valuePrize = (gradeSpin * 4) + resultWheel;
        console.log("valor premio", valuePrize)
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

    unlockSpin =() => {
        console.log(this.state.animatedWheel)
        this.setState({animatedWheel:false})
      
    }
    stopWheel =() =>{

        this.wheelRef.current.classList.remove("img-ruleta");

        // 	if (this.pointsWheel >= 0) {

        this.setState({

            animatedWheel: true,
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
                spinWheel={this.spinWheel}
                wheelRef={this.wheelRef}
                dataWheel={this.state.dataWheel}
                stopWheel={this.stopWheel} 
                unlockSpin = {this.unlockSpin}
                />

        )
    }
}
export default Game;