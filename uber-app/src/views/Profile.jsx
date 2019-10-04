import React from 'react';
import '../styles/Profile.scss';
import { Button } from 'reactstrap';
import profileImg from '../images/Michael.jpg';
import win from '../images/gaana.JPG';
import calificacion from '../images/calificaciones.PNG';
import arrow from '../images/Vector.png';
import badgs from '../images/badgs.JPG';
import { Link } from 'react-router-dom'


class Profile extends React.Component{
    render(){
        return (
            <div className="Profile">
                <div className="header">
                    <div className="back">
                    <img className="arrow" src={arrow} alt="arrow"/>
                    </div>
                    <img className="Picture rounded-circle" src={profileImg} alt="user"/>
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
                <Link to= "/qa"><Button >¡Aumenta tus Ganancias!</Button></Link>
                </div>
                <div className="lineThree"></div>
                <div className="details">
                    <p>Cuéntales a los usuarios un <br></br> poco mas sobre ti</p>
                    <Button outline color="primary">AGREGAR DETALLES</Button>{' '}
                </div>
                <div className="badgets">
                    <img className="badgets" src={badgs} alt="badgets"/>
                    <p>Verás los reconocimientos y las notas de agradecimiento a medida que la recibas.</p>
                </div>

            </div>
        )
    }
}
export default Profile;