import React from 'react';
import wheel from '../images/wheel.png'
const Wheel = (props) => {
return(
    <section>
        <h1>Puntos:</h1>
        <div className="container-wheel">
            <img 
            id = "img-ruleta"
            src={wheel} 
            alt="wheel"
            className="img-responsive img-ruleta"
            style={{
            transform:`rotate(${props.dataWheel}deg)`,
            WebkitTransform:`rotate(${props.dataWheel}deg)`,
            
            
        }}
        onTransitionEnd = {props.stopWheel}
        ref= {props.wheelRef}
            />
        </div>
        <div className="container-button_spin">
            <button disabled = {props.animatedWheel} onClick={props.spinWheel}>Girar</button>
        </div>
    </section>
)

}
export default Wheel;