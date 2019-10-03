import React from 'react';

import wheel from '../images/wheel.png'
import arrow from '../images/arrow.png'
const Wheel = (props) => {
return(
    <section className="container-main">
        <h1 className="tittle-wheel">Gira la Ruleta!!!</h1>
        <div className="container-arrow">
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
        <div className="container-buttons_spin">
            <div className= "container-buttons">
                <button 
                disabled = {props.animatedWheel} 
                onClick={props.spinWheel} 
                className = "btn-spin"
                >Girar
                </button>
                </div>
           
        </div>
    </section>
)

}
export default Wheel;