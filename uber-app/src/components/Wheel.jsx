import React from 'react';
import wheel from '../images/wheel.png'
const Wheel = (props) => {
return(
    <section>
        <h1>Puntos:</h1>
        <div className="conatiner-wheel">
            <img 
            src={wheel} 
            alt="wheel"
            className="img-responsive"
            style={{
                transform:`rotate(${props.dataWheel} deg)`,
            WebkitTransform:`rotate(${props.dataWheel} deg)`
        }}
        ref= {props.wheelRef}
            />
        </div>
        <div>
            <button disable = {props.animatedWheel} onClick={props.spinWheel}>Girar</button>
        </div>
    </section>
)

}
export default Wheel;