import React from 'react';
import '../styles/Profile.scss';
import { Button } from 'reactstrap';
import foodDelivery from '../images/Food-Delivery.jpeg';
import win from '../images/gaana.JPG';
import calificacion from '../images/calificaciones.PNG';




class Profile extends React.Component{
    render(){
        return (
            <div className="Profile">
                <div className="header">
                    <div className="Picture">
                    <img src={foodDelivery} alt="user"/>
                    </div>
                    <div className="Name">
                    <h1>Michael</h1>
                    </div>
                </div>
                <div className="qualification">
                    <img src={calificacion} alt="calificacion"/>
                </div>
                <div className='info'>
                    <div className="travel">
                        <h2>89</h2>
                        <p>Viajes</p>
                    </div>
                    <div className="lineOne"></div>
                    <div className="travel">
                        <h2>8</h2>
                        <p>Meses</p>
                    </div>
                </div>
                <div className="lineTwo"></div>
                <div className="game">
                <img src={win} alt="win"/>
                <Button >¡Aumenta tus Ganancias!</Button>
                </div>
                <div className="lineThree"></div>
                <div className="details">
                    <p>Cuéntales a los usuarios un <br></br> poco mas sobre ti</p>
                    <Button outline color="primary">AGREGAR DETALLES</Button>{' '}
                </div>
                
            </div>
        )
    }
}
export default Profile;