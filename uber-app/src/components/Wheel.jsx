import React from 'react';
import wheel from '../images/wheel.png'
const Wheel = (props) => {
return(
    <section>
        <h1>Puntos:</h1>
        <div>
            <img 
            src={wheel} 
            alt="wheel"/>
        </div>
    </section>
)

}
export default Wheel;