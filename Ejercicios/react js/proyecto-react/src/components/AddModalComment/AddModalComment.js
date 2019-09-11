import React from 'react';
import './AddModalComment.scss';
import ButtonCard from 'components/ButtonCard/ButtonCard';

const AddModalComment = () => (
    <div className='modal-comment'>
        <div>Añadir un comentario</div>
        <input placeholder='Añadir un comentario'></input>
        <ButtonCard />
    </div>
)

export default AddModalComment;