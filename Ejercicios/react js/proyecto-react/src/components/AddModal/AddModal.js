import React from 'react';
import './AddModal.scss';
import AddModalDescription from 'components/AddModalDescription/AddModalDescription';
import AddModalComment from 'components/AddModalComment/AddModalComment';

const AddModal = () => (
    <div className="add-modal">
        <p>Modal title</p>
        <div className='modal-container'>
            <AddModalDescription />
            <AddModalComment />
        </div>
    </div>
)

export default AddModal;