import React from 'react';
import './ButtonCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis } from '@fortawesome/free-solid-svg-icons';


const ButtonCard = () => (
    <button 
    className='button-card'>Agregar Tarjeta
    <FontAwesomeIcon icon={faCannabis} 
    spin
    // color='green'
    />
    </button>
)

export default ButtonCard;