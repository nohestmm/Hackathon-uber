import React from 'react';
import '../styles/QA.scss';
import foodDelivery from '../images/Food-Delivery.jpeg';
import { Button } from 'reactstrap';

class QA extends React.Component{
    render(){
        return (
            <div className="QA">
                <div className="header">
                    <div className="Picture">
                    <img src={foodDelivery} alt="user"/>
                    </div>
                    <div className="Name">
                    <h1>Michael</h1>
                    </div>
                </div>
                <div className='info'>
                    <h2>¿Sabías que?</h2>
                    <p>Diariamente se pierden toneladas de alimentos en Chile.
                    ¡Tú puedes ayudar a cambiar esta realidad y además aumentar tus ingresos!</p>
                </div>
                <div className="lineTwo"></div>
                <div className='info'>
                    <h2>¿Sabías que?</h2>
                    <p>Diariamente se pierden toneladas de alimentos en Chile.
                    ¡Tú puedes ayudar a cambiar esta realidad y además aumentar tus ingresos!</p>
                </div>
                <div className="lineTwo"></div>
                <div className='info'>
                    <h2>¿Sabías que?</h2>
                    <p>Diariamente se pierden toneladas de alimentos en Chile.
                    ¡Tú puedes ayudar a cambiar esta realidad y además aumentar tus ingresos!</p>
                </div>
                <div className="lineTwo"></div>
                <div className='info'>
                    <h2>¿Sabías que?</h2>
                    <p>Diariamente se pierden toneladas de alimentos en Chile.
                    ¡Tú puedes ayudar a cambiar esta realidad y además aumentar tus ingresos!</p>
                </div>
                <div className="lineTwo"></div>


                <div className="details">
                    <p>Cuéntales a los usuarios un <br></br> poco mas sobre ti</p>
                    <Button outline color="primary">AGREGAR DETALLES</Button>{' '}
                </div>           
            </div>
        )
    }
}
export default QA;