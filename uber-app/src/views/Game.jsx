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
        this.spinWheel = this.spinWheel.bind(this)
        this.wheelRef = React.createRef();

    }
    spinWheel() {
        let wheelTemp = this.wheelData;
        const gradeSpin = 360;
        let prize = gradeSpin / 8;

        this.setState({
			// data_ruleta: ruleta_temp * premio,
			animated_ruleta: true,
		})

    }



    render() {
        return (
            <Wheel />
        )
    }
}
export default Game;