import React from 'react';
import Wheel from '../components/Wheel'
class Game extends React.Component{
    constructor(...props){
        super(...props)
        this.state = {

        }
    }

    render(){
        return(
            <Wheel/>
        )
    }
}
export default Game;