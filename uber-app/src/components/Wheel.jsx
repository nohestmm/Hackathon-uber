import React from 'react';
import wheel from '../images/wheel.png'
import arrow from '../images/arrow.png'
const Wheel = (props) => {
return(
    <section>
        <h1>Puntos:</h1>
        <div className="img-arrow">
           <img 
           src={arrow}
           alt="arrow"
           className="img-responsive"
           />
        </div>
        <div className="container-wheel">
            <img 
            id = "img-wheel"
            src={wheel} 
            alt="wheel"
            className="img-responsive img-wheel"
            style={{
            transform:`rotate(${props.dataWheel}deg)`,
            WebkitTransform:`rotate(${props.dataWheel}deg)`,
            
            
        }}
        onTransitionEnd = {props.stopWheel}
        ref= {props.wheelRef}
            />
        </div>
        <div className="container-button_spin">
            <div><
                button disabled = {props.animatedWheel} onClick={props.spinWheel}>Girar</button>
                </div>
            <div>
                <button  onClick={props.unlockSpin}>Habilitar</button>
                </div>
        </div>
    </section>
)

}
export default Wheel;