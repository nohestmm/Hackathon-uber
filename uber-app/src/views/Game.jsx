import React from 'react';
import Wheel from '../components/Wheel'
import Confetti from 'react-confetti'
import SweetAlert from 'sweetalert2-react'
class Game extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            activateConfetti : false,
            totalPoints: 0,
            dataWheel: 0,
            animatedWheel: false,
            typeOfPrize: '',
            randomPosition: 0,
            activateConfetti:false,
            show:false,
        }
        this.prizeList = [
            "Bono de $5000",
            "Guantes",
            "30% de dscto. en taller bici",
            "Candado unlock",
            "Kit accesorios bici",
            "Luces bici",
            "20% de dscto. en taller bici",
            "Casco Bici",
        ]
        this.wheelData = 0;
        this.pointsWheel = '';
        this.spinWheel = this.spinWheel.bind(this)
       
        this.stopWheel = this.stopWheel.bind(this)
        this.wheelRef = React.createRef();
        this.unlockSpin = this.unlockSpin.bind(this);
    }
    spinWheel() {
        let wheelTemp = this.wheelData;
        const gradeSpin = 360;
        let prize = gradeSpin / 8;
        let temporalValue = Math.floor(Math.random() * 8);
        let resultWheel = temporalValue * prize;
        let valuePrize = (gradeSpin * 4) + resultWheel;

        this.setState({
            activateConfetti:false,
            dataWheel: wheelTemp * prize,
            animatedWheel: true,
            typeOfPrize: this.prizeList[temporalValue],

        })
        setTimeout(() => {
            this.wheelRef.current.classList.add('img-wheel');
            this.setState({
                dataWheel: valuePrize,
            })
        }, 200);
    }

    unlockSpin = () => {
        console.log(this.state.animatedWheel)
        this.setState({ animatedWheel: false })

    }
    stopWheel(){
       
        this.wheelRef.current.classList.remove("img-wheel");
        Swal.fire("Felicidades", `Has ganado ${this.state.typeOfPrize}`, "success");
        this.setState({
            animatedWheel: false,
            activateConfetti:true,
            show:true,
        })
       
    }

 

    
  
    render() {
      
        return (
            <>
            <Wheel
                animatedWheel={this.state.animatedWheel}
                spinWheel={this.spinWheel}
                wheelRef={this.wheelRef}
                dataWheel={this.state.dataWheel}
                stopWheel={this.stopWheel}
                unlockSpin={this.unlockSpin}
            />
            <SweetAlert
        show={this.state.show}
        title="Felicidades!"
        text= {`Has ganado ${this.state.typeOfPrize}`}
        onConfirm={() => this.setState({ show: false, activateConfetti: false})}
      />
{this.state.activateConfetti ? <Confetti width ={300} height ={600}/> : null}
</>
        )
    }
}
export default Game;