import React from 'react';
import './AddModalDescription.scss';
import ButtonCard from 'components/ButtonCard/ButtonCard';

const ModalDescription = () => (
    <div className='modal-description'>
        <div>Descripción</div>
        <input placeholder='Añadir una descripción más detallada...'></input>
        <ButtonCard />
    </div>
)

export default ModalDescription;