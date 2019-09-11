import React from 'react';
import './AddColumn.scss';

const AddColumn = () => (
    <div className='add-column'>
        <input className='add-column-input'
        placeholder='Añadir titulo de columna'></input>
        <button className='add-column-button'>Añadir Columna</button>
    </div>
)

export default AddColumn;