import React from 'react';
import '../styles/QA.scss';
import profileImg from '../images/Michael.jpg';
import insignia from '../images/insignia.JPG';
import starcount from '../images/star2.png';
import { Button } from 'reactstrap';
import arrow from '../images/Vector.png';


class QA extends React.Component{
    render(){
        return (
            <div className="QA">
                <div className="headerQA">
                    <div className="backQA">
                        <img className="arrow" src={arrow} alt="arrow"/>
                    </div>
                    <img className="Picture rounded-circle" src={profileImg} alt="user"/>
                    <div className="Name">
                        <h1>Michael</h1>
                    </div>
                </div>   
                <div className="info1">
                    <div className='infoQA'>
                        <h2>¿Sabías que?</h2>
                        <p>Diariamente se pierden toneladas de alimentos en Chile.
                        ¡Tú puedes ayudar a cambiar esta realidad y además aumentar tus ingresos!</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className='infoQA'>
                    <h2>¿En que consiste?</h2>
                    <p>Cuando estés cerca de un local que quiera donar sus alimentos se te notificará.
                        Si aceptas el viaje acumularás una <img src={starcount}  id="logo" alt="logo" className="img-fluid"></img>, las cuales podrás canjear por premios y/o beneficios.</p>
                </div>
                <div className="line"></div>
                <div className='infoQA'>
                    <h2>¿Cómo jugar?</h2>
                    <p>Por cada entrega que realices, ganarás una <img src={starcount}  id="logo" alt="logo" className="img-fluid"></img>, al acumular 5 tendrás la posibilidad de participar en nuestra ruleta de la suerte y ganar!!</p>
                </div>
                <div className="line"></div>
                <div className='infoQA'>
                    <h2>Niveles</h2>
                    <p>Además de participar en la ruleta, aumentarás de nivel y al llegar al número 3 ganarás una insignia que irá en tu perfil y se te reconocerá como un destacado repartidor que ayuda a la responsabilidad social</p>
                </div>
                <div className='badge'>
                    <img src={insignia} alt="insignia"/>
                    <h3>¡Motívate a ayudar en esta buena causa y de pasado aumentar tus ganancias!</h3>
                    <Button outline color="primary">¡Prueba tu suerte aquí!</Button>{' '}
                </div>    
            </div>
        )
    }
}
export default QA;